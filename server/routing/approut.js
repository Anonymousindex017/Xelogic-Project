const express = require('express');


const myapp = express.Router();
const myschema = require('../Schemas/route_schema/route_schema');

myapp.get("/",(req,res)=>{
    res.send("Hello from the API side");
});