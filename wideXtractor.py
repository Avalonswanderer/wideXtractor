#! /usr/bin/python3

import frida
import time
import sys
import os
from pathlib import Path

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
    print("\t\t[+] Writing buffer to file: " + fileName)
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
                folder = "./" + tag + "_buffers/"
            else:
                folder = "./" + tag + "_buffers/" + tag2 + "/"
            buffer = bytearray([c for c in data])
            write2file(tag2 + "_buffer_", buffer, folder)
    else:
        print(message, file=sys.stderr)    

def main():
    device = frida.get_usb_device()
    mediadrm = get_mediadrm_name()
    session = device.attach(mediadrm)
    print("[+] Attached to " + mediadrm)

    print("[+] Processing Frida JS scripts")
    
    script_data = ""
    lib = "libwvdrmengine.so"
    for p in Path("js/hooks").glob('*.js'):
        with p.open() as f:
            symbol = str(p).split("/")[-1].split(".js")[0]
            script_data += "Math.sin = Module.findExportByName('{}', '{}');if (Math.sin != null) {{Interceptor.attach(Math.sin, {});}}\n\n".format(lib, symbol, f.read())

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

