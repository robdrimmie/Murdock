var sys = require( 'sys' );
var xmpp = require( 'node-xmpp' );

var success = false,
      jid = "robtestone@gmail.com",
      pwd = "robtest1";

var cl = new xmpp.Client({
  jid: jid,
  password: pwd }
);

cl.on(
  'online',
  function() {
    console.log( "HELLO" );
    success = true;
  }
);

cl.on(
  'error',
  function(e) {
    console.log(e);
  }
);
