const router = require('express').Router();
const {Course} = require('../models/course');


router.get('', async (req,res)=>{
    let courses = await Course.find();
    res.send(courses);
});

router.post('', async (req,res)=>{
    let course = new Course(req.body);
    course = await course.save();
    res.send(course);
});

module.exports=router;