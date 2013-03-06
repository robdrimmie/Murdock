/** inspired by the way hubot https://github.com/github/hubot enables scripts, 
also projects like Ripple-UI (https://github.com/blackberry/Ripple-UI) and 
Cordova (https://github.com/apache/cordova-js)
*/

var _self;

_self = {
	handle: function( message ) {
		console.log( 'inside murdule' );
		console.log( message );
		console.log( 'leaving murdule' );
		return 'echo says ' + message;
	}
}

module.exports = _self;