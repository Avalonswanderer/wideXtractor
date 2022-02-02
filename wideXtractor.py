#! /usr/bin/python3

import frida
import time
import sys
import os
from pathlib import Path

# Global var for module script
modules = []

def usage():
    print(sys.argv[0] + " [legacy]\n\nlegacy -> Android before version 7")

def get_mediadrm_name():
    numberOfArgs = len(sys.argv)
    if numberOfArgs > 2:
        usage()
        exit(-1)
    elif numberOfArgs == 2:
        mode = sys.argv[1]
    else:
        mode = "new"
        
    if mode != 'legacy' and mode != 'new':
        usage()
        exit(-2)

    if mode == 'legacy':
        mediadrm = 'mediaserver'
    else:
        mediadrm = 'mediadrmserver'
    return mediadrm

def write2file(header, data, folder):
    if not os.path.exists(folder):
        os.makedirs(folder)
        
    fileName = folder + header + str(int(round(time.time() * 1000))) + ".bin";
    print("\n[+] Writing buffer to file: " + fileName + '\n')
    f = open(fileName, 'wb')
    f.write(data)
    f.close()

def onMessage(message, data):
    if message["type"] == "send":
        payload = message['payload']
        typ, tag, tag2 = payload.split(":")
        if (typ == "buffer"):
            if tag2 == '':
                tag2 = tag
                folder = "./out/" + tag + "_buffers/"
            else:
                folder = "./out/" + tag + "_buffers/" + tag2 + "/"
            buffer = bytearray([c for c in data])
            write2file(tag2 + "_buffer_", buffer, folder)
    else:
        print(message, file=sys.stderr)
        
def on_message_lib(message, data):
    global modules
    if message["type"] == "send":
        modules.append(message['payload'])


def get_wv_module(modules, mediadrm):
    widevine_libs = {'libwvdrmengine.so',
                     'libwvhidl.so',
                     'libwvdrm_L1.so',
                     'libdrmwvmplugin.so',
                     'libWVStreamControlAPI_L1.so',
                     'libmediadrm.so',
                     'libwvm.so'}
    wv_module = None
    for lib in widevine_libs:
        if lib in modules:
            wv_module = lib
    if wv_module == None:
        print("No Widevine Module in {}.".format(mediadrm), file=sys.stderr)
        exit(-1)
    return wv_module
        
        
def main():
    global modules
    device = frida.get_usb_device()
    mediadrm = get_mediadrm_name()
    session = device.attach(mediadrm)
    print("[+] Attached to " + mediadrm)

    script = session.create_script("""
    Process.enumerateModules({
          onMatch: function(module){
	    send(module.name);
	  }, 
            onComplete: function(){}
	});
        """)

    script.on('message', on_message_lib)
    
    print("[+] Searching Widevine Module in {}.".format(mediadrm))
    script.load()
    wv_module = get_wv_module(modules, mediadrm)
    print("[+] Widevine Module {} found.".format(wv_module))
    
    print("[+] Processing Frida JS scripts")
    script_data = ""
    for p in Path("js/hooks").glob('*.js'):
        with p.open() as f:
            symbol = str(p).split("/")[-1].split(".js")[0]
            script_data += "Math.sin = Module.findExportByName('{}', '{}');if (Math.sin != null) {{Interceptor.attach(Math.sin, {});}}\n\n".format(wv_module, symbol, f.read())

    script_instance = session.create_script(script_data);
    script_instance.on('message', onMessage)
    print("\t[+] Loading hooks")
    script_instance.load()
    print("\t[+] Hooks loaded successfully")

    print("[+] Listening...")
    sys.stdin.read()
    session.detach()
    print("[+] Detached")

if __name__ == '__main__':
    main()

