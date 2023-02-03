const express = require('express')
const route = express.Router()
const db = require('../models')
const noteRoute = require('../controllers/noteController')



route.post('/createNote',noteRoute.createNote)
route.get('/getAllNote',noteRoute.getAllNote)
route.get('/getOneNote/:note_id',noteRoute.getOneNote)
route.patch('/updateNotes/:note_id',noteRoute.updateNotes)
route.delete('/deleteNote/:note_id',noteRoute.deleteNote)
 
module.exports=route