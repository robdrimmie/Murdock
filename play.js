var sys = require( 'sys' );
var xmpp = require( 'node-xmpp' );
var util = require( 'util' );
//var xml2js = require( 'xml2js' ),
//    parser = xml2js.Parser();

var argv = process.argv;

if (argv.length != 4) {
    console.error('Usage: node echo_bot.js <my-jid> <my-password>');
    process.exit(1);
}

var cl = new xmpp.Client({ jid: argv[2],
         password: argv[3] });

cl.on('online', 
  function() {
    cl.send(  new xmpp.Element('presence', { }).
      c('show').t('chat').up().
      c('status').t('Happily echoing your <message/> stanzas')
    );

    console.log( "echoing" );
  });

cl.on('stanza',
  function(stanza) {
    // Important: never reply to errors!

    console.log(util.inspect(stanza, false, null))
    if (stanza.is('message') && stanza.attrs.type !== 'error') {
      // Swap addresses...
      stanza.attrs.to = stanza.attrs.from;
      delete stanza.attrs.from;
      
      // and send back.
      cl.send(stanza);
      console.log( "sent" );
    }
  });

cl.on('error',
  function(e) {
    console.error(e);
  });