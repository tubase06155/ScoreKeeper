const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser=require('body-parser');
const GameModel= require('./models/gameModel');

mongoose.connect('mongodb://localhost/SCOREKEEPER',(err)=>{
    if(err) console.log("DB connect error",err)
    else console.log("DB connect success");
});

let app=express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended:false
}))
app.listen(6969,(err)=>{
    if(err) console.log(err);
    else console.log("Server is listening at port 8080!");
});