const mongoose = require('mongoose');
const path = process.env.PATH;

mongoose.connect(path).then(()=>{
    console.log("connection is successful");
}).catch((err)=>{
    console.log("no connection");
});
