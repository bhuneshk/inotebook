const express = require('express');
const router = express.Router();
const User = require('../modules/User');
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
const JWT_SECRET='Bhuneshisagood$oy';
const fetchuser = require('../middleware/fetchuser');
router.post('/createuser', [body('name', 'Enter Valid Username').isLength({ min: 3 }), body('email', 'Enter Valid Email').isEmail(), body('password', 'Password should be minimum 5 char').isLength({ min: 5 })], async (req, res) => {
    let success=true;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success:false,errors: errors.array()});
    }
    try{
        let user=await User.findOne({email: req.body.email });
        if(user){
            return res.status(400).json({success:false,error: "Sorry user with this email already exists"});
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

        res.json({success:true,authtoken:authtoken});
    }catch(error){
        console.log(error);
        res.status(500).json({error:"Some error occured"})
    }
})

router.post('/login', [body('email', 'Enter Valid Email').isEmail(), body('password', 'Password cannot be empty').exists()], async (req, res) => {
    let success=true;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        success=false;
        return res.status(400).json({success:false,errors: errors.array()});
    }
    const {email,password}=req.body;
    try{
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({success:false,error: "Please enter the valid credentials"});
        }
        
        const passwordCompare=await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({success:false,error: "Please enter the valid credentials"});
        }

        const data={
            user:{
                id: user.id
            }
        }
        const authtoken=  jwt.sign(data,JWT_SECRET);

        res.json({success,authtoken});
    }catch(error){
        console.log(error);
        res.status(500).send("Internal server error")
    }
})

router.post('/getuser', fetchuser , async (req, res) => {
    try {
        const userID=req.user.id;
        const user= await User.findById(userID).select('-password');
        res.send(user);

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;