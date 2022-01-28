{
    onEnter: function ( args) {
	console.log('_oecc47: OEMCrypto_LoadKeys(ctxID=' + args[0]
		    + ', message=' + args[1]
		    + ', message_len=' + args[2].toInt32()
		    + ', signature=' + args[3]
		    + ', signature_len=' + args[4].toInt32()
		    + ', enc_serverKey_IV=' + args[5]
		    + ', enc_serverKey=' + args[6]
		    + ', numOfKeys=' + args[7]
		    + ', keys=' + args[8]
		    + ', saveServerKey=' + args[9]
		    + ', add_usage_entry=' + args[10]
		    + ')');
	send('buffer:LoadKeys:', args[1].readByteArray(args[2].toInt32()));
    },
    onLeave: function ( retval) {
	console.log('_oecc47: return ' + retval + '\n');
    }
}
