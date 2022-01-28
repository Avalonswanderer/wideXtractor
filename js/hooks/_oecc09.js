{
    onEnter: function ( args) {
	console.log('_oecc09: OEMCrypto_OpenSession()');
	this.sessionID = args[0];
    },
    onLeave: function ( retval) {
	console.log('ctxID=' + this.sessionID.readPointer().toInt32())
	console.log('_oecc09: return ' + retval + '\n');
    }
}
