const router = require('express').Router();
const {Course} = require('../models/course');


router.get('', async (req,res)=>{
    let courses = await Course.find();
    res.send(courses);
});

module.exports=router;