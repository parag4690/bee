const express = require('express')
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const Posts = require("./model/posts.js");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/post" , require("./routes/posts.js"));


mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    app.listen(1234 , ()=>{
        console.log("server started at port 1234");
    });
});




