require("dotenv").config();
var axios = require('axios')

var spotify = new Spotify(keys.spotify);
console.log(spotify)
// var movieThis = process.argv[2]
// var movie = process.argv.slice(3).join(' ')
// axios.get(`http://www.omdbapi.com/?t=${movie}&apikey=99836726`)
//     .then(function (response) {
//         if (process.argv[2] == 'movieThis') {
//             var data = response.data
//             console.log(data)
//         } else {
//             console.log('tryagain')
//         }

//     })

// var artist = 'kendrick'
// axios.get(`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`)
//     .then((response) => {
//         console.log(response)
//     })