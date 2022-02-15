const router = require('express').Router();
const {Course, course_validation} = require('../models/course');

// Display all courses
router.get('', async (req,res)=>{
    let courses = await Course.find();
    res.send(courses);
});

// ADD new course
router.post('', async (req,res)=>{
    let validation_result = course_validation.validate(req.body);
    if (validation_result.error) {
        return res.status(400).send(validation_result.error.details[0].message);
    }

    let course = new Course(req.body);
    course = await course.save();
    res.send(course);
});

module.exports=router;