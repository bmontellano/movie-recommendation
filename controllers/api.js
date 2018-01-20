var Twitter = require('twitter');
var request = require('request');
const URL = `https://api.themoviedb.org/4/list/{list_id}?page=1&api_key=${process.env.API_KEY}&sort_by=release_date.asc`;

function getTweets(req, res) {
    console.log("******getTweets")
    var client = new Twitter({
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token_key: process.env.ACCESS_TOKEN_KEY,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET
      });
    var params = {screen_name: 'valeriaoshiro'};
    
    var cursor = -1;
    var api_path = 'friends/list.json?screen_name=twitterapi&skip_status=true&include_user_entities=false&count=200';
    var celebrities = [];
    
    client.get('friends/list.json?cursor=-1&screen_name=twitterapi&skip_status=true&include_user_entities=false&count=200', params, function(error, tweets, response) {
    if (!error) {
        //cursor = tweets.next_cursor;
        //console.log("////////", tweets.next_cursor, tweets.users.length);
        //console.log("*********users ", tweets.users);
        tweets.users.forEach(function(user){
            if(user.verified) celebrities.push(user.name);
            console.log("*********", celebrities);
        })
    } else {
        console.log(error);
    }
    });
}

function getMovies(req, res) {
    // hello
}

module.exports = {
    getTweets,
    getMovies
}