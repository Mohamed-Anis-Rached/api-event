const express = require('express')
const route = express.Router()
const db = require('../models')
const roomController = require('../controllers/roomController')


route.patch('/addToRoom/:room_id',roomController.addToRoom)
route.get('/getAllRoom',roomController.getAllRoom)

 
module.exports=route