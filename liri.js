require("dotenv").config();
const OmdbApi = require('omdb-api-pt')
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

const omdb = new OmdbApi({
  apiKey: process.env.OMDB_KEY
})


if (usera === "my-tweets") {
	client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
	console.log(tweets);
	});
} else if (usera === "spotify-this-song" ){
	if (userb === undefined) {
	spotify.search({ type: 'track', query: "The Sign" }, function(err, data) {
		if (err) {
		return console.log('Error occurred: ' + err);
		}


		console.log(JSON.stringify("Spotify URL "+data.tracks.items[0].external_urls.spotify)); 
		console.log(JSON.stringify("Track Name "+data.tracks.items[0].name)); 
		console.log(JSON.stringify("Artist Name "+data.tracks.items[0].album.artists[0].name)); 
		console.log(JSON.stringify("Album Name "+data.tracks.items[0].album.name)); 
	});
	} else {
		spotify.search({ type: 'track', query: userb }, function(err, data) {
		if (err) {
		return console.log('Error occurred: ' + err);
		}


		console.log(JSON.stringify("Spotify URL "+data.tracks.items[0].external_urls.spotify)); 
		console.log(JSON.stringify("Track Name "+data.tracks.items[0].name)); 
		console.log(JSON.stringify("Artist Name "+data.tracks.items[0].album.artists[0].name)); 
		console.log(JSON.stringify("Album Name "+data.tracks.items[0].album.name)); 
	});
	}



} else if (usera === "movie-this"){
	if (userb === undefined) {
		console.log("If you haven't watched \"Mr. Nobody,\" then you should: http://www.imdb.com/title/tt0485947/ It's on Netflix!")
	} else {

			omdb.bySearch({
			search: userb,
			page: 1
			}).then(res => console.log("Title: " + res.Search[0].Title + "\nYear: "+ res.Search[0].Year))
			.catch(err => console.error(err))
		
	}
	
} else {
	return;
}


// * `my-tweets`




// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`