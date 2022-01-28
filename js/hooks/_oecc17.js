{
    onEnter: function ( args) {
	console.log('_oecc17: OEMCrypto_SelectKey(ctxID=' + args[0]
		    + ', key_id=' + args[1]
		    + ', key_id_length=' + args[2].toInt32()
		    + ')');
	this.key_id = args[1]
	this.key_id_len = args[2].toInt32()
      	console.log('key_id:\n' + hexdump(this.key_id, {
	    offset: 0,
	    length: this.key_id_len,
	    header: false,
	    ansi: false
	}));
    },
    onLeave: function ( retval) {
	console.log('_oecc17: return ' + retval + "\n");
    }
}
