/** inspired by the way hubot https://github.com/github/hubot enables scripts, 
also projects like Ripple-UI (https://github.com/blackberry/Ripple-UI) and 
Cordova (https://github.com/apache/cordova-js)
*/

var _self;

_self = {
	name: "echo",

	handle: function( xmpp, to, message ) {
		console.log( 'inside echo' );

		xmpp.send( to, 'echo says ' + message );

		console.log( 'leaving echo' );
	}
}

module.exports = _self;