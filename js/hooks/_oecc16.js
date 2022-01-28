{
    onEnter: function ( args) {
	console.log('_oecc16: OEMCrypto_RefreshKeys(ctxID=' + args[0]
		    + ', message=' + args[1]
		    + ', message_len=' + args[2].toInt32()
		    + ', signature=' + args[3]
		    + ', signature_len=' + args[4].toInt32()
		    + ', num_keys=' + args[5].toInt32()
		    + ', key_infos=' + args[6]
		    + ')');
	send('buffer:RefreshKeys:', args[1].readByteArray(args[2].toInt32()));
    },
    onLeave: function ( retval) {
	console.log('_oecc16: return ' + retval + "\n");
    }
}
