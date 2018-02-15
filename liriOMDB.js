require("dotenv").config();

var myKeys = require("./keys.js");
	// console.log(myKeys);

var Spotify = require('node-spotify-api');
var request = require("request");

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);
 
// var spotify = new Spotify({
//   id: myKeys.spotify.id,
//   secret: myKeys.spotify.secret
// });

// spotify.search({ type: 'track', query: 'All the Small Things', limit: 5 }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data.tracks); 

// });

var userInput = process.argv;

var movieName = "";

for (var i = 3; i < userInput.length; i++) {
	movieName = movieName + " + " + userInput[i];
}

var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

console.log(queryURL);

request(queryURL, function(error, response, body) {
	if(!error && response.statusCode === 200) {
		console.log(JSON.parse(body).Title);
		console.log("This movie came out in " + JSON.parse(body).Year);
		console.log("The IMDB rating for this movie is " + JSON.parse(body).Ratings[0].Value);
		console.log("The Rotten Tomatoes rating for this movie is " + JSON.parse(body).Ratings[1].Value);
		console.log("This movie was produced in " + JSON.parse(body).Country);
		console.log("This movie is in " + JSON.parse(body).Language);
		console.log("The plot of this movie is " + JSON.parse(body).Plot);
		console.log("The actors in this movie were " + JSON.parse(body).Actors);
	}
})