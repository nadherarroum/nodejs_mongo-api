require('./db/connect');

const express = require('express');
const appDebug = require('debug')('app:debug');
const {Course} = require('./models/course');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
/*
let course = new Course({
    title : 'NodeJs',
    author : 'R. Hmida',
    tags : ['back','express','nodejs',],
    isPublished : 'false'
});
*/
let course = new Course({
    title : 'NodeJs',
    author : 'R. Hmida',
    tags : ['back','express','nodejs',],
    isPublished : 'false'
});

console.log(course.save());

app.listen(port, ()=>appDebug(`Server on ${port}`));