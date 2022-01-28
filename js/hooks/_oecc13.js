{
    onEnter: function ( args) {
	console.log('_oecc13: OEMCrypto_GenerateSignature(ctxID=' + args[0]
	    + ', message=' + args[1]
	    + ', message_len=' + args[2].toInt32()
	    + ', signature=' + args[3]
	    + ', signature_len=' + args[4].readU32()
		    + ')');
	this.sig = args[3];
	this.sig_len = args[4].readU32();
	this.message = args[1];
	this.message_len = args[2].toInt32();
    },
    onLeave: function ( retval) {
	if (retval == 0) {
	    console.log('message:\n' +
			hexdump(this.message, {length: this.message_len, header: false}));
	    console.log("signature:\n" +
			hexdump(this.sig, {length: this.sig_len.readU32(), header: false}));
	    send('buffer:GenerateSignature:message', this.message.readByteArray(this.message_len));
	    send('buffer:GenerateSignature:signature', this.sig.readByteArray(this.sig_len));
	}
	console.log('_oecc13: return ' + retval + '\n');
    }
}
