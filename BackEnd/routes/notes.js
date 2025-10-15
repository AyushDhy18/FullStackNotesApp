const express = require("express");
const router = express.Router();
const Note = require('../models/Note');

//get all the notes............
router.get('/',async (req,res) =>{
    try{
        const notes = await Note.find().sort({createdAt : -1});
        res.json(notes);
    }catch(err){
        res.status(500).json({message:err.message});
    };
});

//Create a new note ...........
router.post('/', async (req,res) => {
    try{
        const note = new Note({title,content});
        const saved = await note.save();
        res.status(201).json(saved);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

//get one note............
router.get('/:id',getNote,(req,res)=>{
    res.json(res.note);
});

//update note .............
router.put('/:id',getNote,async(req,res)=>{
    const {title,content} = req.body;
    if(title !== undefined){res.note.title = title};
    if(content !== undefined){res.note.content = content};

    try{
        const updated = await res.note.save();
        res.json(updated);
    }catch(err){
        res.status(400).json({message:err.message})
    }
});

//delete a note ...................
router.delete('/id',getNote,async(req,res)=>{
    try{
    await res.note.remove();
    res.json({message:'Note deleted ....'});
    }catch(err){
        res.status(500).json({message:err.message})
    }
})


async function getNote(req,res,next){
    let note;
    try{
        note = await Note.findById(req.params.id);
        if (!note){return res.status(404).json({message:'Note not found'})}
    }catch(err){
        return res.status(500).json({message:err.message})
    }
    res.note = note;
    next();
}

module.exports =router;