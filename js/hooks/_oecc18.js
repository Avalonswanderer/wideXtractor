{
    onEnter: function ( args) {
	console.log('_oecc18: OEMCrpypto_RewrapDeviceRSAKey(ctxID=' + args[0]
		    + ', message=' + args[1]
		    + ', message_len=' + args[2].toInt32()
		    + ', signature=' + args[3]
		    + ', signature_len=' + args[4].toInt32()
		    + ', nonce=' + args[5]
		    + ', enc_rsaKey=' + args[6]
		    + ', enc_rsaKey_len=' + args[7].toInt32()
		    + ', iv=' + args[8]
		    + ', out_buffer=' + args[9]
		    + ', out_buffer_len=' + args[10]
		    + ')'
		   );

	send("buffer:RewrapDeviceRSAKey:message", args[1].readByteArray(args[2].toInt32()));
	send("buffer:RewrapDeviceRSAKey:enc_rsaKey", args[6].readByteArray(args[7].toInt32()));
	
	console.log('nonce:');
	console.log(hexdump(args[5], {header: false, length: 4}));
	console.log('iv:');
	console.log(hexdump(args[8], {header: false, length: 0x10}));
	
    },
    onLeave: function ( retval) {
	console.log('_oecc18: return ' + retval + '\n');
    }
}
