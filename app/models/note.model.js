const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
    title:String,
    content:String
}, {
    timestamps:true
})

module.exports = mongoose.model('Note', NoteSchema)

//the notes model have two fields a title and a content 
//timestamps set to true add createdat and updatedat to the dbase