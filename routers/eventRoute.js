const express = require('express')
const route = express.Router()
const db = require('../models')
const eventController = require('../controllers/eventController')
const path = require('path')



route.post('/createEvent',eventController.upload,eventController.createEvents)
route.get('/getallevent',eventController.getAllEvent)
route.get('/getOneEvent/:event_id',eventController.getOneEvent)
route.patch('/updateEvent/:event_id',eventController.upload,eventController.updateEvent)
route.delete('/deleteEvent/:event_id',eventController.deleteEvent)
 
module.exports=route