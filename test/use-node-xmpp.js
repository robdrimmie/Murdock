exports.testNodeXmpp = function(test){
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
