const express= require('express');
const router = express.Router();
const Notes= require('../modules/Notes')
const {body, validationResult}= require('express-validator');
const fetchuser = require('../middleware/fetchuser');
router.get('/fetchallnotes',fetchuser, async (req,res)=>{
    try {
        
    const notes = await Notes.find({user: req.user.id})
    res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
})

router.post('/addnote',fetchuser,[body('title').isLength({min:3}),body('description').isLength({min: 5})], async (req,res)=>{
    const {title, description, tag} = req.body;
    try {
        
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const notes = new Notes({
        tag, title, description, user: req.user.id
    })

    const savedNote = await notes.save();
    res.send(savedNote);
} catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
}
})

router.put('/updatenote/:id',fetchuser, async (req,res)=>{
    try {
        
    let note = await Notes.findById(req.params.id);
    if(!note){
        return res.status(404).send("Not Found");
    }

    if(note.user.toString()!= req.user.id){
        return res.status(401).send("Not Allowed");
    }
    const {title, description, tag} = req.body;
    const newNote={};
    if(title){
        newNote.title=title;
    }
    if(description){
        newNote.description=description;
    }
    if(tag){
        newNote.tag=tag;
    }
    
    note = await Notes.findByIdAndUpdate(req.params.id,{$set : newNote},{new:true})
    res.send(note);
} catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
}
})

router.delete('/deletenote/:id',fetchuser, async (req,res)=>{
    try {
        
    let note = await Notes.findById(req.params.id);
    if(!note){
        return res.status(404).send("Not Found");
    }

    if(note.user.toString()!= req.user.id){
        return res.status(401).send("Not Allowed");
    }
    
    await Notes.findByIdAndDelete(req.params.id)
    res.send('Deleted');
} catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
}
})

module.exports=router;