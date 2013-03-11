/** inspired by the way hubot https://github.com/github/hubot enables scripts, 
also projects like Ripple-UI (https://github.com/blackberry/Ripple-UI) and 
Cordova (https://github.com/apache/cordova-js)
*/

var _self;
var _xmpp;
var _to;
var _message;

_delayedHandle = function() {
	console.log( 'inside handle' );
	_xmpp.send( _to, 'delayedecho says ' + _message );
	console.log( 'leaving handle' );
}

_self = {
	name: "delayed echo",
	handle: function( xmpp, to, message ) {
		console.log( 'inside delayed' );		
		_xmpp = xmpp;
		_to = to;
		_message = message;
		setTimeout( _delayedHandle, 5000 );
		console.log( 'leaving delayed' );

	}
}

module.exports = _self;