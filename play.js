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

    
    if (stanza.is('message') && stanza.attrs.type !== 'error') {
 //     console.log(util.inspect(stanza.attrs, false, null))
//      console.log(stanza);
      
      // find the text of the message
      var numKids = stanza.children.length;
      var idxKid = 0;
      var messageText = 'message text not found';

      while( idxKid < numKids ) {
        if( stanza.children[idxKid].name === 'body') {
          messageText = stanza.children[idxKid].children[0];
          idxKid = numKids + 1;
        }

        idxKid++;
      };

      console.log( messageText );

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