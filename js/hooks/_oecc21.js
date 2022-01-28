{
    onEnter: function ( args) {
	console.log('_oecc21: OEMCrypto_DeriveKeysFromSessionKey(ctxID=' + args[0]
	    + ', enc_session_key=' + args[1]
		    + ', enc_session_key_len=' + args[2].toInt32()
	    + ', mac_key_context=' + args[3]
	    + ', mac_key_context_len=' + args[4].toInt32()
	    + ', enc_key_context=' + args[5]
	    + ', enc_key_context_len=' + args[6].toInt32()
		    +')');
	send("buffer:DeriveKeysFromSessionKey:enc_session_key",
	     args[1].readByteArray(args[2].toInt32()));
	send("buffer:DeriveKeysFromSessionKey:mac_context_session",
	     args[3].readByteArray(args[4].toInt32()));
	send("buffer:DeriveKeysFromSessionKey:encryption_context_session",
	     args[5].readByteArray(args[6].toInt32()));
    },
    onLeave: function ( retval) {
	console.log('_oecc21: return ' + retval + '\n');
    }
}
