const fs = require('fs');
fs.writeFileSync('notes.txt', 'This file is created by node.js app..YAhoo..!\n')
fs.appendFileSync('notes.txt', 'I live in FSD')