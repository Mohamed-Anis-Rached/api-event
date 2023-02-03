const db = require('../models')
const multer = require('multer')
const path = require('path')



const Event = db.events
const Room = db.room
const createEvents = async (req, res) => {
       
    let info = {
        libelle:req.body.libelle,
        lattitude:req.body.lattitude,
        longitude:req.body.longitude,
        photo:req.file.path,
        prix:req.body.prix,
        date_debut:req.body.date_debut,
        date_fin:req.body.date_fin,
        date_inscri:req.body.date_inscri,
        date_cloture:req.body.date_cloture,
        heure_debut:req.body.heure_debut,
        heure_fin:req.body.heure_fin,
        heure_inscri:req.body.heure_inscri,
        heure_cloture:req.body.heure_cloture,
        statut:req.body.statut,
        nb_places:req.body.nb_places,
        qr_code:req.file.path,
        OrganisateurOrganisateurId:req.body.OrganisateurOrganisateurId
    }
    const event = await db.Event.create(info)
    const room = await db.Room.create({
        msg:req.body.msg,
        EventEventId:event.event_id,
        OrganisateurOrganisateurId:event.OrganisateurOrganisateurId
    })
    res.status(200).send(event)
    console.log(event)
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '100000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg || jpg || png/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('give proper file format')
    }
}).single('photo')


const getAllEvent = async (req, res) => {

    let event = await db.Event.findAll({})
    res.status(200).send(event)
}

const getOneEvent = async (req, res) => {
    const event_id = req.params.event_id
    let event = await db.Event.findAll({where:{event_id:event_id}})
    res.status(200).send(event)
}
const updateEvent = async (req, res) => {
    const event_id = req.params.event_id
    
    const event = await db.Event.update(req.body, { where: { event_id: event_id }})
    res.status(200).send(event)
    
}

const deleteEvent = async (req, res) => {
    const event_id = req.params.event_id
    const event = await db.Event.destroy({ where:{ event_id: event_id}})
    res.status(200).send("event is deleted !")
   
}


module.exports = {
    createEvents,
    getAllEvent,
    getOneEvent,
    updateEvent,
    deleteEvent,
    upload
}