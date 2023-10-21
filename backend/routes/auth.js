const express = require('express');
const router = express.Router();
const User = require('../modules/User');
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
const JWT_SECRET='Bhuneshisagood$oy';

router.post('/', [body('name', 'Enter Valid Username').isLength({ min: 3 }), body('email', 'Enter Valid Email').isEmail(), body('password', 'Password should be minimum 5 char').isLength({ min: 5 })], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    try{
        let user=await User.findOne({email: req.body.email });
        if(user){
            return res.status(400).json({error: "Sorry user with this email already exists"});
        }
        const salt= await bcrypt.genSalt(10);
        const secPass= await bcrypt.hash(req.body.password,salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })
        const data={
            user:{
                id: user.id
            }
        }
        const authtoken= jwt.sign(data,JWT_SECRET);

        res.json({authtoken});
    }catch(error){
        console.log(error);
        res.status(500).send("Some error occured")
    }
})

module.exports = router;