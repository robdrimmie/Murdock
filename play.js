var sys = require( 'sys' );
var xmpp = require( 'node-xmpp' );
var sax = require( 'sax' ),
    parser = sax.parser(true); // use strict

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
      // Swap addresses...
      stanza.attrs.to = stanza.attrs.from;
      delete stanza.attrs.from;

      console.log( stanza );
      stanza.children.forEach( function( element, index, array ) {
        console.log(element);
        console.log(index);
        console.log(array);
      });
      
      // and send back.
      cl.send(stanza);
      console.log( "sent" );
    }
  });

cl.on('error',
  function(e) {
    console.error(e);
  });