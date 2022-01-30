
    const notes = require('../controllers/note.controller.js')
    const express = require('express')    
    const router = express.Router()    
    //create a new note 
    router.post('/notes', notes.create)


    //retrieve all notes 
    router.get('/notes', notes.findAll)

    //retrieve single note
    router.get('/notes/:noteId', notes.findOne)

    //update with note id
    router.put('/notes/:noteId', notes.update)

    //delete with note id
    router.delete('/notes/:noteId', notes.delete)

    module.exports = router