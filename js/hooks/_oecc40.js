{
    onEnter: function ( args) {
	console.log('_oecc40: OEMCrypto_CopyBuffer(data_addr=' + args[0]
		    + ', data_len=' + args[1].toInt32()
		    + ', out_buffer=' + args[2]
		    + ', cdm_decryption_parameter=' + args[3]
		    + ')');
    },
    onLeave: function ( retval) {
	console.log('_oecc40: return ' + retval + '\n');
    }
}
