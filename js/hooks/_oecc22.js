{
    onEnter: function ( args) {
	console.log('_oecc22: OEMCrypto_GetAPIVersion(securityLevel=' + args[0] + ')');
    },
    onLeave: function ( retval) {
	console.log('_oecc22: return ' + retval + '\n');
    }
}
