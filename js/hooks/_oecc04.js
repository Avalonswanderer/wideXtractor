{
    onEnter: function ( args) {
	console.log('_oecc04: OEMCrypto_GetKeyData(keyData=' + args[0]
		    + ', inKeyDataLength=' + args[1].toInt32()
		    + ', outKeyDataLength=' + args[2]
		    + ')');
    },
    onLeave: function ( retval) {
	console.log('_oecc04: return ' + retval + '\n');
    }
}
