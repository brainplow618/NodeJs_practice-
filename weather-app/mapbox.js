// // Goal: handle error for geocoding request 

const request = require('request')
// const geocode = require('./util/geocode')
const forcost = require('./util/forcost')

// // const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2hhbWk2MTgiLCJhIjoiY2wwYWlvNjQ0MGI0ejNrcXNpMHhyZXU5NCJ9.QJA_RuNwIVNwMvbh4I3Q4g&limit=1'
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12Ehtisham.json?access_token=pk.eyJ1Ijoic2hhbWk2MTgiLCJhIjoiY2wwYWlvNjQ0MGI0ejNrcXNpMHhyZXU5NCJ9.QJA_RuNwIVNwMvbh4I3Q4g&limit=1'

// request({url: geocodeURL, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect location services..!')
//     } else if (response.body.attribution) {
//         console.log("Unable to find location.!")
//     } 
//     else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
// })




// geocode('philadelphia', (error, data) => {
//     console.log('Error ', error)
//     console.log('Data', data)
// })

forcost(-75.1327, 40.0115, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})