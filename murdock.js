var sys = require( 'sys' ),
    xmpp = require( 'simple-xmpp' ),
    fs = require( 'fs' ),

    murdulesList = Array(),
    murdulesFile = './murdules.json',
    murdulesPath = './murdules/',
    murdulesFiles = [],

    argv = process.argv
    ;

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

// open the murdules.json file, get the array of murdules, load them all
// @todo genercise these file functions

fs.exists( murdulesFile, function murdulesFileExists( exists ) {
  if( exists ) {
    fs.readFile( murdulesFile, function loadMurdulesFiles( err, data ) {
      murdulesFiles = JSON.parse( data );
    
      var thisMF;
      for( mfIdx = 0; mfIdx < murdulesFiles.length; mfIdx++ ) {
        thisMF = murdulesPath + murdulesFiles[mfIdx];

        mfExists = fs.existsSync( thisMF );
        if( mfExists ) {
          murdulesList.push( require(thisMF) );
        } else {
          console.error( 'thisMF does not exist: ' + thisMF );
        }
      }

      console.log( murdulesList );
    });
  } else {
    console.error( 'murdules.json does not exist' );
  }
});



xmpp.on('online', function() {
  console.log( "\nechoing\n" );
});

xmpp.on('chat', function(from, message) {
  var murduleCount = murdulesList.length;
  var mrIdx, response;

  for( mrIdx = 0; mrIdx < murduleCount; mrIdx++ ) {
    thisMurdule = murdlesList[mrIdx];
    response = thisMurdule.handle( xmpp, from, message );
  }
});

xmpp.on('error', function(err) {
  console.error(err);
});