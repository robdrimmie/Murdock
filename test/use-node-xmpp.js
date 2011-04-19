exports.testNodeXmppExists = function(test){
  var success = false;

  test.expect(1);

  try {
    xmpp = require('node-xmpp');

    success = true;
  } catch ( err ) {
  }

  test.ok( success, "Node-XMPP exists and is included." );
  test.done();
};

exports.testOnline = function(test) {
  var success = false,
      jid = "robtestone@gmail.com",
      pwd = "robtest1";

  test.expect(1);

  var cl = new xmpp.Client({ 
    jid: jid,
    password: pwd }
  );

  cl.on(
    'online',
    function() {
      console.log( "HELLO" );
      success = true;
      test.ok( success, "Authorized and online." );
    }
  );

  cl.on(
    'error',
    function(e) {
      console.log(e);
    }
  );

  test.done();
};
