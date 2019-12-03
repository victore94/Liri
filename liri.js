require("dotenv").config()
var keys = require("./keys.js");
var fs = require("fs");
var axios = require('axios')
var Spotify = require('node-spotify-api');



var action = process.argv[2];
switch (action) {
    case "movieThis" || 1:
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


function spotifyThisSong() {
    var spotify = new Spotify(keys.spotify);
    if (process.argv[3]) {
        var songTrack = process.argv.slice(3).join(' ')
    } else {
        var songTrack = 'Ace of Bass'
    }
    console.log(songTrack)

    spotify
        .search({ type: 'track', query: songTrack, limit: 1 })
        .then(function (response) {
            console.log(response.tracks.items)


        })
        .catch(function (err) {
            console.log(err);
        });
}

function movieThis() {
    var movie = process.argv.slice(3).join(' ')
    axios.get(`http://www.omdbapi.com/?t=` + (movie || 'Mr Nobody') + `&apikey=99836726`)
        .then(function (response) {
            var data = response.data
            if (process.argv[2] == 'movieThis') {
                var movieData = [
                    `Year: ${data.Year}`,
                    `Rotten Tomatoes Rating: ${data.Ratings[1].Value}`,
                    `Country Where Produced: ${data.Country}`,
                    `Language: ${data.Language}`,
                    `Plot: ${data.Plot}`,
                    `Starring: ${data.Actors}`,
                    `Title: ${data.Title}`
                ]
                console.log(movieData)

            } else {
                console.log('error')
            }

        });

}

function concertThis() {

    if (process.argv[3]) {
        var artist = process.argv.slice(3).join("+")
    } else {
        console.log('Please enter an artist')
    }
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

function readFile() {
    fs.readFile('./random.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else
            console.log('data', data);
    });
}
