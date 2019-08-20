var keys = require("./keys.js");
require("dotenv").config();
var axios = require('axios')

// var spotify = new Spotify(keys.spotify);
// spotify
//     .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.error('Error occurred: ' + err);
//     });



// -------------------------------------------------------------------------------
// -------------------------------OMDB MOVIE--------------------------------------
// -------------------------------------------------------------------------------
// this will take in a movie title and spit out information regarding a movie

var movieThis = process.argv[2]
var movie = process.argv.slice(3).join(' ')
axios.get(`http://www.omdbapi.com/?t=${movie}&apikey=99836726`)
    .then(function (response) {
        if (process.argv[2] == 'movieThis') {

            var data = response.data
            // console.log(data)
            console.log(`Title: ${data.Title}`)
            console.log(`Year: ${data.Year}`)
            console.log(`Rotten Tomatoes Rating: ${data.Ratings[1].Value}`)
            console.log(`Country Where Produced: ${data.Country}`)
            console.log(`Language: ${data.Language}`)
            console.log(`Plot: ${data.Plot}`)
            console.log(`Starring: ${data.Actors}`)
        } else {
            movie = 'mr. nobody'
        }

    });



// -------------------------------------------------------------------------------
// -------------------------------OMDB MOVIE--------------------------------------
// -------------------------------------------------------------------------------




// -------------------------------------------------------------------------------
// -------------------------------Band's In Town----------------------------------
// -------------------------------------------------------------------------------

var concertThis = process.argv[2]
var artist = process.argv.slice(3).join("+")
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function (err, response) {

        var data = response.data
        if (process.argv[2] === 'concertThis' & data != undefined) {
            console.log(`Venue: ${data[0].venue.name}`)
            console.log(`Venue: ${data[0].venue.city}, ${data[0].venue.country}`)
            console.log(`Venue: ${data[0].datetime}`)
        } else {
            err = 'nothing'
            console.log(err)
        }

    })
// -------------------------------------------------------------------------------
// -------------------------------Band's In Town----------------------------------
// -------------------------------------------------------------------------------



