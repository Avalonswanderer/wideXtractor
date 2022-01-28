{
    onEnter: function ( args) {
	console.log('_oecc12: OEMCrypto_GenerateDerivedKeys(ctxID=' + args[0]
		    + ', mac_key_context=' + args[1]
		    + ', mac_key_context_len=' + args[2].toInt32()
		    + ', enc_key_context=' + args[3]
		    + ', enc_key_context_len=' + args[4].toInt32()
		    + ')'
		   );
	send('buffer:GenerateDerivedKeys:mac_context', args[1].readByteArray(args[2].toInt32()));
	send('buffer:GenerateDerivedKeys:encryption_context', args[3].readByteArray(args[4].toInt32()));
    },
    onLeave: function ( retval) {
	console.log('_oecc12: return ' + retval + '\n');
    }
}
