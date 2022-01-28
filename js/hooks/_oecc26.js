{
    onEnter: function ( args) {
	console.log('_oecc26: OEMCrypto_Generic_Sign(ctxID=' + args[0]
		    + ', buffer=' + args[1]
		    + ', buffer_len=' + args[2].toInt32()
		    + ', algo_type=' + args[3].toInt32()
		    + ', signature=' + args[4]
		    + ', signature_len=' + args[5].readU32()
		    + ')');
	this.plaintext = args[1];
	this.plaintext_len = args[2].toInt32();
	this.signature = args[4];
    },
    onLeave: function ( retval) {
	send("buffer:GenericSign:data", this.plaintext.readByteArray(this.plaintext_len));
	send("buffer:GenericSign:signature", this.signature.readByteArray(args[5].readU32()));
	console.log('_oecc26: return ' + retval + '\n');
    }
}
