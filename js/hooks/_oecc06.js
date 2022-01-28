{
    onEnter: function ( args) {
	console.log('_oecc06: OEMCrypto_GetRandom(randomData=' + args[0]
	    + ', dataLength=' + args[1].toInt32()
	    + ')');
	this.randNum = args[0];
	this.randLen = args[1].toInt32()
    },
    onLeave: function ( retval) {
	console.log('randomData:\n' + hexdump(this.randNum, {
	    offset: 0,
	    length: this.randLen,
	    header: false,
	    ansi: false
	}));
	console.log('_oecc06: return ' + retval + '\n');
    }
}
