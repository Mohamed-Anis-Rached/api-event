const db = require('../models')
const multer = require('multer')
const path = require('path')



const Interet = db.interet

const createInteret = async (req, res) => {
       
    let info = {
        nom:req.body.nom,
        photo:req.file.path
    }
    const interet = await db.Interet.create(info)
    res.status(200).send("Interet added !!")
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
        cb('donner la correcte format')
    }
}).single('photo')



const getAllInteret = async (req, res) => {

    let interet = await db.Interet.findAll({})
    res.status(200).send(interet)
}

const getOneInteret = async (req, res) => {
    const interet_id = req.params.interet_id
    let interet = await db.Interet.findAll({where:{interet_id:interet_id}})
    res.status(200).send(interet)
}
const updateInteret = async (req, res) => {
    const interet_id = req.params.interet_id  
    const interet = await db.Interet.update(req.body, { where: { interet_id: interet_id }})
    res.status(200).send(interet)   
}

const deleteInteret = async (req, res) => {
    const interet_id = req.params.interet_id
    const interet = await db.Interet.destroy({ where:{ interet_id: interet_id}})
    res.status(200).send("Interet is deleted !")
   
}


module.exports = {
    upload,
    createInteret,
    getAllInteret,
    getOneInteret,
    updateInteret,
    deleteInteret
}