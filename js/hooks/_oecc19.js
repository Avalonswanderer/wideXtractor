{
    onEnter: function ( args) {
	console.log('_oecc19: OEMCrypto_LoadDeviceRSAKey(ctxID=' + args[0]
		    + ', wrapped_rsa_key=' + args[1]
		    + ', wrapped_rsa_key_len=' + args[2].toInt32()
		    +')');
	send("buffer:LoadDeviceRSAKey:wrapped_rsa_key", args[1].readByteArray(args[2].toInt32()));
    },
    onLeave: function ( retval) {
	console.log('_oecc19: return ' + retval + "\n");
    }
}
