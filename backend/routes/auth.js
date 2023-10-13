const express= require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    const obj={
        'name' : 'bhunesh',
        'roll no': '19001011016'
    }
    res.json(obj);
})

module.exports=router;