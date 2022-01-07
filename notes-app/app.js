
// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'This file is created by node.js app..YAhoo..!\n')
// fs.appendFileSync('notes.txt', 'I live in FSD')

// const fname = require('./index.js')
// console.log(fname)


const {add,sub}  = require('./index.js')
const sum  = add(4, 3)
const diff  = sub(4, 3)
console.log(sum)
console.log(diff)