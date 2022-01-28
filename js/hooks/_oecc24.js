{
    onEnter: function ( args) {
	console.log('_oecc24: OEMCrypto_Generic_Encrypt(ctxID=' + args[0]
		    + ', plaintext=' + args[1]
		    + ', plaintext_len=' + args[2].toInt32()
		    + ', iv=' + args[3]
		    + ', algo_type=' + args[4].toInt32()
		    + ', ciphertext=' + args[5]
		    +')');
	
	send("buffer:GenericEncrypt:", args[1].readByteArray(args[2].toInt32()));
    },
    onLeave: function ( retval) {
	console.log('_oecc24: return ' + retval + "\n");
    }
}
