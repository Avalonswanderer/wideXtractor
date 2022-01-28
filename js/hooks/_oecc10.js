{
    onEnter: function ( args) {
	console.log('_oecc10: OEMCrypto_CloseSession(ctxID=' + args[0] + ')');
    },
    onLeave: function ( retval) {
	console.log('_oecc10: return ' + retval + '\n');
    }
}
