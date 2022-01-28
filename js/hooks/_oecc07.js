{
    onEnter: function ( args) {
	console.log('_oecc07: OEMCrypto_GetDeviceID(input=' + args[0]
	    + ', input_len=' + args[1].readUInt()
	    + ')');
	this.deviceID_ptr = args[0]
	this.deviceID_len = args[1].readUInt()
    },
    onLeave: function ( retval) {
	console.log('DeviceID: ' + this.deviceID_ptr.readCString());
	console.log('_oecc07: return ' + retval + '\n');
    }
}
