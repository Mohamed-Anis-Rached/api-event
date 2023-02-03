const db = require('../models')

const Note = db.note

const createNote = async (req, res) => {
       
    const note = await db.Note.create({
        rate:req.body.rate,
        note:req.body.note
    })
    res.status(200).send("Note created !!")
}

const getAllNote = async (req, res) => {

    let note = await db.Note.findAll({})
    res.status(200).send(note)
}

const getOneNote = async (req, res) => {
    const note_id = req.params.note_id
    let note = await db.Note.findAll({where:{note_id:note_id}})
    res.status(200).send(note)
}
const updateNotes = async (req, res) => {
    const note_id = req.params.note_id  
    const note = await db.Note.update(req.body, { where: { note_id: note_id }})
    res.status(200).send(note)   
}
const deleteNote = async (req, res) => {
    const note_id = req.params.note_id
    const note = await db.Note.destroy({ where:{ note_id: note_id}})
    res.status(200).send("Note is deleted !")
   
}

module.exports = {
    createNote,
    getAllNote,
    getOneNote,
    updateNotes,
    deleteNote
}