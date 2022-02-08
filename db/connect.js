const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://nadheruser:Password@cluster0.7idrp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(()=> console.log('MongoDB is UP'))
        .then((err)=> console.log('MongoDB is Down : '+err));