require("dotenv").config();

var myKeys = require("./keys.js");
	// console.log(myKeys);

var Twitter = require('twitter');
var request = require("request");
 
var client = new Twitter({
  consumer_key: myKeys.twitter.consumer_key,
  consumer_secret: myKeys.twitter.consumer_secret,
  access_token_key: myKeys.twitter.access_token_key,
  access_token_secret: myKeys.twitter.access_token_secret
});
 
var params = {screen_name: 'Sherr Fitz', count: 3};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    console.log(tweets[0].created_at);
    console.log(tweets[0].text);
  }
});



// tweets[i].created_at
// tweets[i].text