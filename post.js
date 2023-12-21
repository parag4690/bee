const mongoose = require('mongoose');

const naming = new mongoose.Schema({
    name : String , 
   
});

// jo schema bnaya h useka object bnane k liye model ki jrurt hoti

module.exports = mongoose.model("name" , naming);