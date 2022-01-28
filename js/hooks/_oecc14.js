{
    onEnter: function ( args) {
	console.log('_oecc14: OEMCrypto_GenerateNonce(ctxID=' + args[0]
	    + ', input=' + args[1]
	    + ')');
	this.nonce_ptr = args[1]
    },
    onLeave: function ( retval) {
	console.log('nonce:\n' + hexdump(this.nonce_ptr, {
            offset: 0,
            length: 4,
            header: false,
            ansi: false
	}));
	console.log('_oecc14: return ' + retval + '\n');
    }
}
