require("dotenv").config();

var myKeys = require("./keys.js");
	// console.log(myKeys);

var fs = require('fs');

var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var request = require("request");


userInput = process.argv;
command = userInput[2];


if (command === "spotify-this-song") {
var spotify = new Spotify({
  id: myKeys.spotify.id,
  secret: myKeys.spotify.secret
});

	if (userInput.length == 3) {
		var userRequest = "ace of base";
		// console.log("Movie" + movieName);
	} else {
		var userRequest = userInput[3];
	}

spotify.search({ type: 'track', query: userRequest, limit: 1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

// console.log(data.tracks.items);
	console.log("The name of this song is " + data.tracks.items[0].name);
	console.log("This song is performed by " + data.tracks.items[0].artists[0].name);
	console.log("Here is a link to a preview of the song from Spotify: " + data.tracks.items[0].external_urls.spotify);
	console.log("This song is from the " + data.tracks.items[0].album.name + " album."); 
	fs.appendFileSync("log.txt", ("\nSpotify search... Movie: " + data.tracks.items[0].name + ", Artist: " + data.tracks.items[0].artists[0].name + ", url: " + data.tracks.items[0].external_urls.spotify + ", Album: " + data.tracks.items[0].album.name + "\n")); 
});

} else if (command === "movie-this") {
	// var movieName = process.argv[3];

	var request = require("request");
	// var queryURL = "http://www.omdbapi.com/?t=" + userRequest + "&y=&plot=short&apikey=trilogy";

	// console.log(queryURL);
	// console.log(userInput.length);

	if (userInput.length == 3) {
		var movieName = "Mr+Nobody";
		console.log("If you haven't watched 'Mr. Nobody', then you should: http://www.imdb.com/title/tt0485947/");
		console.log("It's on Netflix!");
		// console.log("Movie" + movieName);
	} else {
		var movieName = "";
		for (var i = 3; i < userInput.length; i++) {
		movieName = movieName + " + " + userInput[i];
	}
}

var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// console.log(queryURL);

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
			fs.appendFileSync("log.txt", ("\nOMDB search... Movie: " + JSON.parse(body).Title + ", Year: " + JSON.parse(body).Year + ", IMDB Rating: " + JSON.parse(body).Ratings[0].Value + ", Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "Country: " + JSON.parse(body).Country + "Language: " + JSON.parse(body).Language + "Plot: " + JSON.parse(body).Plot + "Actors: " + JSON.parse(body).Actors + "\n")); 
		}
	});

} else if (command === "my-tweets") {

	var client = new Twitter({
  consumer_key: myKeys.twitter.consumer_key,
  consumer_secret: myKeys.twitter.consumer_secret,
  access_token_key: myKeys.twitter.access_token_key,
  access_token_secret: myKeys.twitter.access_token_secret
});
 
var params = {screen_name: 'Sherr Fitz', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    // console.log(tweets);
    for (i = 0; i < tweets.length; i++) {

    console.log("\n This tweet was created " + tweets[i].created_at + ":");
    console.log(tweets[i].text);
    fs.appendFileSync("log.txt", ("\nTwitter search... Date created: " + tweets[i].created_at + ", Tweet: " + tweets[i].text + "\n"));

	}
  }
});
}



// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

