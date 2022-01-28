{
    onEnter: function ( args) {
	console.log('_oecc08: OEMCrypto_WrapKeybox(keybox=' + args[0]
		    + ', keyboxLength=' + args[1].toInt32()
		    + ', wrappedKeybox' + args[2]
		    + ', wrappedKeyboxLength' + args[3]
		    + ', transportKey' + args[4]
		    + ', transportKeyLength' + args[5].toInt32()
		    + ')');
    },

    onLeave: function ( retval) {
	console.log('_oecc08: return ' + retval + '\n');
    }
}
