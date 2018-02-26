require("dotenv").config();
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var usera = process.argv[2];
var userb = process.argv[3];

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

if (usera === "my-tweets") {
	client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
	console.log(tweets);
	});
} else if (usera === "spotify-this-song" ){
spotify.search({ type: 'track', query: userb }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log(JSON.stringify(data)); 
});
} else {
	return;
}



// * `my-tweets`




// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`