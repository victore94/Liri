require("dotenv").config()
var keys = require("./keys.js");
var fs = require("fs");
var axios = require('axios')
var Spotify = require('node-spotify-api');



var action = process.argv[2];
switch (action) {
    case "movieThis":
        movieThis();
        ;
        break;

    case "readFile":
        readFile();
        break;

    case "concertThis":
        concertThis();
        break;

    case "spotifyThisSong":
        spotifyThisSong();
        break;
}

// -------------------------------------------------------------------------------
// ----------------------------------Spotify--------------------------------------
// -------------------------------------------------------------------------------

function spotifyThisSong() {
    var spotify = new Spotify(keys.spotify);

    spotify
        .search({ type: 'track', query: 'All the Small Things' })
        .then(function (response) {
            console.log(response.tracks.items);
        })
        .catch(function (err) {
            console.log(err);
        });
}

// -------------------------------------------------------------------------------
// ----------------------------------Spotify--------------------------------------
// -------------------------------------------------------------------------------


// -------------------------------------------------------------------------------
// ---------------------------------OMDB MOVIE------------------------------------
// -------------------------------------------------------------------------------
// this will take in a movie title and spit out information regarding a movie

function movieThis() {
    var movie = process.argv.slice(3).join(' ')
    axios.get(`http://www.omdbapi.com/?t=` + (movie || 'Mr Nobody') + `&apikey=99836726`)
        .then(function (response) {
            var data = response.data
            if (process.argv[2] == 'movieThis') {
                var movieData = [
                    `----------------------------------------`,
                    `Year: ${data.Year}`,
                    `Rotten Tomatoes Rating: ${data.Ratings[1].Value}`,
                    `Country Where Produced: ${data.Country}`,
                    `Language: ${data.Language}`,
                    `Plot: ${data.Plot}`,
                    `Starring: ${data.Actors}`,
                    `Title: ${data.Title}`
                        `----------------------------------------`,
                ]
                console.log(movieData)

            } else {
                console.log('error')
            }

        });

}
// -------------------------------------------------------------------------------
// -------------------------------OMDB MOVIE--------------------------------------
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// -------------------------------Band's In Town----------------------------------
// -------------------------------------------------------------------------------
function concertThis() {
    var artist = process.argv.slice(3).join("+")
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function (response) {
            var data = response.data
            var concertData = [
                `Venue: ${data[0].venue.name}`,
                `Venue: ${data[0].venue.city}, ${data[0].venue.country}`,
                `Venue: ${data[0].datetime}`]
            console.log(concertData)
        })
}
// -------------------------------------------------------------------------------
// -------------------------------Band's In Town----------------------------------
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------
// -------------------------------Read File----------------------------------
// -------------------------------------------------------------------------------

function readFile() {
    fs.readFile('./random.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else
            console.log('data', data);
    });
}
// -------------------------------------------------------------------------------
// -------------------------------Read File----------------------------------
// -------------------------------------------------------------------------------
