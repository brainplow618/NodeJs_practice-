const request = require('request')
const geocode = require('./util/geocode')
const forcost = require('./util/forcost')



geocode('Boston', (error, data) => {
    console.log('Error ', error)
    console.log('Data', data)

    forcost(data.latitude, data.longitude, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
    })
})

