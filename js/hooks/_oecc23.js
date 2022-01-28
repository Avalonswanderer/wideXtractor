{
    onEnter: function ( args) {
	console.log('_oecc23: OEMCrypto_GetSecurityLevel()');
    },
    onLeave: function ( retval) {
	console.log('_oecc23: return ' + retval.readPointer() + '\n');
    }
}
