const mongoose = require('mongoose');

const appmanagement = new mongoose.Schema({
    appmenu : {
        type: String,
    },
    applink: {
        type: String,
    },
    appicon:{
        type : String,
    }
});

const appmodel =  mongoose.model('appdata', appmanagement);

module.exports = appmodel;