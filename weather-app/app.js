// console.log("Starting")

// setTimeout(() =>{
//     console.log('5 second Timer')
// }, 5000)

// setTimeout(() =>{
//     console.log('0 second Timer')
// }, 0)

// console.log("Stoping")


const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=d774500f8b1db43ee559520b7f7e1891&query=37.8267,-122.4233'
// units in fornhight
const url = 'http://api.weatherstack.com/current?access_key=d774500f8b1db43ee559520b7f7e1891&query=37.8267,-122.4233&units=f'

// request ({url: url}, (error, response) => {
//     // console.log(response)
//     const data = JSON.parse(response.body)
//     console.log(data)
//     // console.log(data.currently)
// })

// request({url: url, json: true}, (error, response) => {
//     console.log(response.body.currently)
        
// })

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike + 'degrees out.' + 'There is ' + response.body.current.precip + '% chance of rain.')
})


// Goal: print the lat/long for los angle.



