{
    onEnter: function ( args) {
	console.log('_oecc35: OEMCrypto_LoadKeys(ctxID=' + args[0]
		    + ', message=' + args[1]
		    + ', message_len=' + args[2].toInt32()
		    + ', signature=' + args[3]
		    + ', signature_len=' + args[4].toInt32()
		    + ', enc_serverKey_IV=' + args[5]
		    + ', enc_serverKey=' + args[6]
		    + ', numOfKeys=' + args[7]
		    + ', keys=' + args[8]
		    + ', saveServerKey=' + args[9]
		    + ', add_entry_table' + args[10]
		    + ', param12' + args[11]
		    + ', param13' + args[12]
		    + ')');
	send('buffer:LoadKeys:', args[1].readByteArray(args[2].toInt32()));
    },
    onLeave: function ( retval) {
	console.log('_oecc35: return ' + retval + '\n');
    }
}
