const express= require('express');
const router = express.Router();
const User= require('../modules/User');
const {body,validationResult} = require('express-validator');
router.post('/',[body('name').isLength({min:3}),body('email').isEmail(),body('password').isLength({min:3})],(req,res)=>{
    const result = validationResult(req);
     if (result.isEmpty()) {
    const user=User(req.body);
    user.save();
    return res.send(req.body);
  }

  res.send({ errors: result.array() });
})

module.exports=router;