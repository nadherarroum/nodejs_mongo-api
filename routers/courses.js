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

// get all documents from courses by title
router.get('/title/:t', async (req,res) => {
    let course = await Course.find({title : req.params.t});
    res.send(course);
});

// get all documents from courses start with
router.get('/title/start/:prefixe', async (req,res) => {
    let course = await Course.find({title : new RegExp('^'+req.params.prefixe,'i')},'title author price -_id')
                            .sort({author : 1, price : -1}) // sort by author ASC and price DESC
                            .limit(2)
                            .skip(1);
    res.send(course);
});

module.exports=router;