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



// this will take in a movie title and spit out informatio regarding a movie
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



var artist = 'kendrick'
axios.get(`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`)
    .then((response) => {
        console.log(response)
    })