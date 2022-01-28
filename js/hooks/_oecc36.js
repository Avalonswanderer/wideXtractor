{
    onEnter: function ( args) {
	console.log('_oecc36: OEMCrypto_GenerateRSASignature(ctxID=' + args[0]
		    + ', message=' + args[1]
		    + ', message_len=' + args[2]
		    + ', sig=' + args[3]
		    + ', sig_len=' + args[4]
		    + ', is_buf_null=' + args[5]
		    + ', padding_type=' + args[6]
		    + ')');
	
	this.mess = args[1];
	this.mess_len = args[2];
	this.sig = args[3];
	this.sig_len = args[4];
    },
    onLeave: function ( retval) {
	if (retval == 0) {
	    send("buffer:GenerateRSASignature:signature",
		 this.sig.readByteArray(this.sig_len.readU32()));
	}
	send("buffer:GenerateRSASignature:message", this.mess.readByteArray(this.mess_len.toInt32()));
	console.log('_oecc36: return ' + retval + '\n');
    }
}
