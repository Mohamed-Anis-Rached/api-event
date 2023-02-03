const express = require('express')
const route = express.Router()
const db = require('../models')
const userController = require('../controllers/userController')

route.post('/register',userController.upload,userController.registerUser)
route.post('/login',userController.Login)
module.exports=route