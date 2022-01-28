{
    onEnter: function ( args) {
	console.log('_oecc25: OEMCrypto_Generic_Decrypt(ctxID=' + args[0]
		    + ', ciphertext=' + args[1]
		    + ', ciphertext_len=' + args[2].toInt32()
		    + ', iv=' + args[3]
		    + ', algo_type=' + args[4].toInt32()
		    + ', plaintext=' + args[5]
		    + ')'
		   );
	this.plaintext = args[5];
	this.len = args[2].toInt32();
    },
    onLeave: function ( retval) {
	send("buffer:GenericDecrypt:", this.plaintext.readByteArray(this.len));
	console.log('_oecc25: return ' + retval + '\n');
    }
}
