/** inspired by the way hubot https://github.com/github/hubot enables scripts, 
also projects like Ripple-UI (https://github.com/blackberry/Ripple-UI) and 
Cordova (https://github.com/apache/cordova-js)
*/

var _self;

_delayedHandle = function( xmpp, to, message ) {
	console.log( 'inside handle' );
	xmpp.send( to, 'delayedecho says ' + message );
	console.log( 'leaving handle' );
}

_self = {
	name: "delayed echo",
	handle: function( xmpp, to, message ) {
		console.log( 'inside delayed' );		
		setTimeout( _delayedHandle( xmpp, to, message), 5000 );
		console.log( 'leaving delayed' );

	}
}

module.exports = _self;