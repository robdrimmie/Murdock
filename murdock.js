var sys = require( 'sys' );
var xmpp = require( 'simple-xmpp' );
var util = require( 'util' );
var murdule = require( './murdules/echo');

var argv = process.argv;

if (argv.length != 4) {
    console.error('Usage: node echo_bot.js <my-jid> <my-password>');
    process.exit(1);
}

xmpp.connect({ 
  jid: argv[2],
  password: argv[3],
  host: 'talk.google.com',
  port: 5222
});

xmpp.on('online', function() {
  console.log( "\nechoing\n" );
});

xmpp.on('chat', function(from, message) {
  // Important: never reply to errors!

  response = murdule.handle(message);

  xmpp.send( from, response );
});

xmpp.on('error', function(err) {
  console.error(err);
});