const db=require('./models')

const express = require('express')
const socketIO = require('socket.io')
const http = require('http')
const app = express()

const server = http.createServer(app)
const io = socketIO(server)

app.use(express.urlencoded({extended:true}))
app.use(express.json())


const eventRoute =require("./routers/eventRoute")
const userRoutes = require('./routers/userRoute')
const categoryRoute = require('./routers/categoryRoute')
const ticketRoute = require('./routers/ticketRoute')
const noteRoute = require('./routers/noteRoute')
const oraganisateurRoute=require('./routers/organisateurRoute')
const interetRoute = require('./routers/interetRoute')
const galleryRoute = require('./routers/galleryRoute')
const roomRoute = require('./routers/roomRoute')
const path = require('path')
const roomController = require('./controllers/roomController')


app.use('/api/event',eventRoute)
app.use('/api/user', userRoutes)
app.use('/api/category', categoryRoute)
app.use('/api/ticket', ticketRoute)
app.use('/api/note', noteRoute)
app.use('/api/organisateur', oraganisateurRoute)
app.use('/api/interet', interetRoute)
app.use('/api/gallery', galleryRoute)
app.use('/api/room',roomRoute)


//! cette code n'execute pas avec socket.io 
/*io.on('connection', socket =>{
    socket.on('sendMessage',(req,res,next)=>{
        const room_id = req.params.room_id
             db.Room.findAll({where:{room_id:room_id}}).then(room =>{
             if(!room){
                 res.status(400).json({message:"invalid room !!"})
             }else{
                 io.on('connection',function(msg){
                    let msgUser={
                        room_id:room_id,
                        UserUserId:UserUserId,
                        msg:req.body.msg
                    }
                    console.log("a user connected")
                     io.to(room_id).emit('send',msgUser.msg,msgUser.UserUserId)
                 })
             }
         })
     })
})*/

app.use('/Images',express.static('./Images'))

db.sequelize.sync().then(()=>{
    app.listen(3000,()=>console.log('server running'))
})