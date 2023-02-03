const db = require('../models')

const Room = db.room
const User = db.user
const addToRoom = async (req, res) => {
    const room_id = req.params.room_id  
    const room = await db.Room.update(req.body, { where: { room_id: room_id }})
    res.status(200).send(room) 
    
    return true  
}
const getAllRoom = async (req, res) => {

    let room = await db.Room.findAll({})
    res.status(200).send(room)
}

module.exports = {
    addToRoom,
    getAllRoom
}