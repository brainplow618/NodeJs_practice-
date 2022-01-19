const fs = require('fs')
// const book = {
//     title : 'Ego is Enemy',
//     author : "Rayan Holiday"
// }

// const BookJSON = JSON.stringify(book)
// console.log(BookJSON)

// const parseData = JSON.parse(BookJSON)
// console.log(parseData.author)

// fs.writeFileSync('1-json.json', BookJSON)

// const databuffer = fs.readFileSync('1-json.json')
// const dataJSON = databuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title )

// *********************************challange*********************************

const databuffer = fs.readFileSync('1-json.json')
const dataJSON = databuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Shami'
user.age = 24

const userJSON = JSON.stringify(user)
console.log(fs.writeFileSync('1-json.json', userJSON))
// console.log(data.name + "\n" + data.age)