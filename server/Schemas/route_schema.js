const mongoose = require('mongoose');

const datapatternschema = new mongoose.Schema({
    
    fullname: {
        type: String,
        required: true
    },
    Dob:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true  
    },
    password: {
        type: String,
        required: true
    }
});

const mypattern = mongoose.model('mypattern', datapatternschema);

module.exports = mypattern;