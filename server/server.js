const express = require('express');
const myapp = express();
const cors = 
const myrouting = require('./routing/approut');

require("dotenv").config();

const PORT = process.env.PORT || 5600;

myapp.use(express.json());
myapp.use(cors());
myapp.use(myrouting);


myapp.listen(PORT, ()=>{
    console.log(`server is working On port ${PORT}`);
})