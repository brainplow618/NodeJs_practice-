
// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'This file is created by node.js app..YAhoo..!\n')
// fs.appendFileSync('notes.txt', 'I live in FSD')

// const fname = require('./index.js')
// console.log(fname)


// const {add,sub}  = require('./index.js')
// const sum  = add(4, 3)
// const diff  = sub(4, 3)
// console.log(sum)
// console.log(diff)


// const { getMaxListeners } = require('process')


// const validator = require('validator')
// console.log(validator.isEmail('shamigetMaxListeners.com'))


// const ngetNotes = require('./index.js')
// console.log(ngetNotes())

const Notes = require('../chalk/chalk.js')
const msg = Notes()
console.log(msg)

console.log(process.argv[2]);