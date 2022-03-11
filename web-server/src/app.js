const express = require("express")
const path = require("path")


console.log(__dirname)
console.log(__filename)
// console.log(path.join(__dirname, '../public'))

const app = express()

const PublicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(PublicDirectoryPath))

// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>')

// })

app.get('/help', (req, res) => {
    res.send([{
        name: 'alias',
        age: 24
    },
    {
        name: 'alias',
        age: 24
    }])

})

app.get('/about', (req, res) => {
    res.send('<h1></h1>')

})

app.get('/weather', (req, res) => {
    res.send({
        forcost: 'It is snowing',
        location: 'Faisalabad'
    })

})

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})