const fs = require('fs')
const chalk = require('chalk')

//adding note
const addNotes = (title,body) => {
    const note = loadNotes()
    // const duplicateNotes = note.filter((notes) => notes.title === title)    //can use
    const duplicateNote = note.find((notes) => notes.title === title)

    // if(duplicateNotes.length === 0){    //can use
    // if(duplicateNote === undefined){    //can use

    if(!duplicateNote){
        note.push ({
            title : title,
            body : body
        })
        saveNotes(note)
        console.log(chalk.green.inverse('New note added!'))

    } else{
        console.log(chalk.red.inverse('Note title already taken!'))
    }
}

//removing note
const removeNote = (title) => {
    const note = loadNotes()
    const notesToKeep = note.filter((notes) => notes.title !== title)

    if(note.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No note found!'))
    }
}

//List note
const listNote = () => {
    const note = loadNotes()

    console.log(chalk.green('Your notes...'))
    note.forEach(notes => {
        console.log(notes.title);
    })

}

// Read note
const readNote = (title) => {
    const note = loadNotes()
    const findNote = note.find((notes) => notes.title === title)

    if(findNote){
        console.log(chalk.green(findNote.title))
        console.log(chalk.yellow(findNote.body))
    } else {
        console.log(chalk.red('No note found!'))
    }
}

const saveNotes = (note) => {
    const dataJson = JSON.stringify(note)
    fs.writeFileSync('note.json',dataJson)
}

const loadNotes = () => {
try{
        const bufferData = fs.readFileSync('note.json',)
        const dataJson = bufferData.toString()
        return JSON.parse(dataJson)

} catch(e){
    return []
    }
}


module.exports = {
    addNotes : addNotes,
    removeNote : removeNote,
    listNote : listNote,
    readNote : readNote
}




