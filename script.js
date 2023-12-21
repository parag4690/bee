const express = require("express");
const name = require("./post.js");

const app = express();

const mongoose = require('mongoose');
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.post('/add/data' , (req , res)=>{
    const {Oldname} = req.body;
    const newName = new name({name :Oldname });
    newName.save();
    res.send("new name added");

})

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    app.listen(1234 , ()=>{
        console.log("server started");
    })
  }).catch(()=>{
    console.log("not connected");
  });