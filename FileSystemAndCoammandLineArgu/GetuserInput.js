const yargs = require('yargs')


// console.log(process.argv)
//customixza version
yargs.version('1.1.0')


// create add commmand
yargs.command({
    command : 'add',
    describe : 'Added a new note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv) {
        console.log('Title:' + argv.title)
        console.log('Body:'  + argv.body)
        // console.log("Adding new note ...!" , argv)
        
    }
})


//create remove command 
yargs.command({
    command : 'remove',
    describe : 'Renove a new note',
    handler : function() {
        console.log("Remove new note ...!")
        
    }
})

// create list command
yargs.command({
    command : 'list',
    describe : 'List your note',
    handler : function() {
        console.log("List out all notes...!")
        
    }
})

// create read command
yargs.command({
    command : 'read',
    describe : 'read your note',
    handler : function() {
        console.log("read your note...!")
        
    }
})


// add, remove, read, list
// console.log(yargs.argv)
yargs.parse()




// const command = process.argv[2]
// if (command === 'add'){
//     console.log('Adding note..!')
// }else if(command === 'remove'){
//     console.log('Remove note')

// }