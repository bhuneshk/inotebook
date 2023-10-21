const express= require('express');
const router = express.Router();
const Notes= require('../modules/Notes')
const {body, validationResult}= require('express-validator');
const fetchuser = require('../middleware/fetchuser');
router.get('/fetchallnotes',fetchuser, async (req,res)=>{
    const notes = await Notes.find({user: req.user.id})
    res.json(notes);
})

router.get('/addnote',fetchuser,[body('title').isLength({min:3}),body('description').isLength({min: 5})], async (req,res)=>{
    const {title, description, tag} = req.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const notes = new Notes({
        tag, title, description, user: req.user.id
    })

    const savedNote = await notes.save();
    res.send(savedNote);
})

module.exports=router;