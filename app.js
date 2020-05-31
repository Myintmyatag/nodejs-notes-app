
const chalk = require('chalk')

const notes = require('./notes.js')

const yargs = require('yargs')

//add, remove, read, list

// Create add command
yargs.command({
    command : 'add',
    describe : 'Adding a note',
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
    handler(argv){
        notes.addNotes(argv.title , argv.body)
    }
})

// Create remove command
yargs.command({
    command : 'remove',
    describe : 'Removing a note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command : 'list',
    describe : 'Listing your note',

    handler(argv){
        notes.listNote(argv)
    }
})

// Create read command
yargs.command({
    command : 'read',
    describe : 'Reading a note',
    builder : {
        title : {
            describe : 'Note title' ,
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

// console.log(yargs.argv)
yargs.parse()



