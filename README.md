# WideXtractor

## WideXtractor Android

Dependencies:

- `Python3`
- `python3-frida-tools`

WideXtractor needs a Frida server to be run on the target device with ptrace capability for media process (i.e, media, root, system).

WideXtractor traces the Media DRM process on Android and hooks the Widevine library in use. \_oeccXX (from \_oecc01 to \_oecc48) functions are then hooked to dump important buffers, return values, and arguments, for inspection. Once WideXtractor attached, using an OTT app such as Netflix will start the usage of the Widevine CDM and log the control flow.

```
$ ./wideXtractor.py [legacy|new]
legacy -> Android < v7
new    -> v7 and above
```

## Chrome EME Plugin with WideXtractor

The [eme\_logger\_widextractor](./eme\_logger\_widextractor) folder contains a modified version of the [EME Logger](https://chrome.google.com/webstore/detail/eme-call-and-event-logger/cniohcjecdcdhgmlofniddfoeokbpbpb) Chrome plugin. This version incorporates hexdump for License server message exchange and functions info for proprietary Widevine buffer analysis.