require("dotenv").config();

var myKeys = require("./keys.js");
	// console.log(myKeys);

var Spotify = require('node-spotify-api');
var request = require("request");


var spotify = new Spotify({
  id: myKeys.spotify.id,
  secret: myKeys.spotify.secret
});

spotify.search({ type: 'track', query: 'ace of base', limit: 10 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log(data.tracks.items);
console.log(data.tracks.items[0].name);
console.log(data.tracks.items[0].artists[0].name);
console.log(data.tracks.items[0].external_urls.spotify);
console.log(data.tracks.items[0].album.name); 

});
