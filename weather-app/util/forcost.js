const request = require('request')


const forcost = (latitude, longitude, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=d774500f8b1db43ee559520b7f7e1891&query=' + latitude + ' , ' + longitude + '&units=f'

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect weather services..! ', undefined)

        } else if (response.body.error) {
            callback('Unable to find location ..!', undefined)

        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike + 'degrees out.' + 'There is ' + response.body.current.precip + '% chance of rain.')

        }

    })
}

module.exports = forcost

