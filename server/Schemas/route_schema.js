const mongoose = require('mongoose');

const datapatternschema = new mongoose.Schema({
    
    fullname: {
        type: String,

    },

    Dob:{
        type: String,

    },

    email: {
        type: String,
    
    },

    mobile: {
        type: Number,

    },

    password: {
        type: String,
        
    }

});

const mypattern = mongoose.model('mypattern', datapatternschema);

module.exports = mypattern;