{
    onEnter: function ( args) {
	console.log('_oecc28: OEMCrypto_getHDCPCapability(*maximum=' + args[0]
		    + ', *current=' + args[1]
		    +')');
	this.max = args[0];
	this.current = args[1];
    },
    onLeave: function ( retval) {
	console.log('current: ' + this.current.readU32() + ' maximum: ' + this.max.readU32());
	console.log('_oecc28: return ' + retval + '\n');
    }
}
