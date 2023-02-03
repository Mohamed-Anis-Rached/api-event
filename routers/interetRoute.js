const express = require('express')
const route = express.Router()
const db = require('../models')
const interetController = require('../controllers/interetController')
const path = require('path')



route.post('/createInteret',interetController.upload,interetController.createInteret)
route.get('/getAllInteret',interetController.getAllInteret)
route.get('/getOneInteret/:interet_id',interetController.getOneInteret)
route.patch('/updateInteret/:interet_id',interetController.upload,interetController.updateInteret)
route.delete('/deleteInteret/:interet_id',interetController.deleteInteret)
 
module.exports=route