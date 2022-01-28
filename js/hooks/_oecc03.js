{
    onEnter: function (args) {
	console.log('_oecc03: OEMCrypto_InstallKeybox('
		    + 'keybox=' + args[0]
		    + ', keybox_length=' + args[1].toInt32()
		    + ')');
    },
    onLeave: function (retval) {
	console.log('_oecc03 return ' + retval);
    }
}
