{
    onEnter: function ( args) {
	console.log('_oecc48: OEMCrypto_DecryptCENC(ctxID=' + args[0]
		    + ', data_addr=' + args[1]
		    + ', data_length=' + args[2].toInt32()
		    + ', is_encrypted=' + args[3]
		    + ', iv=' + args[4]
		    + ', block_offset=' + args[5]
		    + ', out_buffer=' + args[6]
		    + ', param8=' + args[7]
		    + ', param9=' + args[8]
		    + ', param10=' + args[9]
		    + ')');
    },
    onLeave: function ( retval) {
	console.log('_oecc48: return ' + retval + '\n');
    }
}
