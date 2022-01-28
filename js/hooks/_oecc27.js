{
    onEnter: function ( args) {
	console.log('_oecc27: OEMCrypto_Generic_Verify(ctxID=' + args[0]
		    + ', in_buffer=' + args[1]
		    + ', buffer_len=' + args[2].toInt32()
		    + ', algo_type=' + args[3].toInt32()
		    + ', signature=' + args[4]
		    + ', signature_len=' + args[5].toInt32()
		    + ')'
		   );
	send("buffer:GenericVerify:data", args[1].readByteArray(args[2].toInt32()));
	send("buffer:GenericVerify:signature", args[4].readByteArray(args[5].toInt32()));
    },
    onLeave: function ( retval) {
	console.log('_oecc27: return ' + retval + '\n');
    }
}
