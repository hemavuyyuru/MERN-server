//mongodb schema
const mongoose = require('mongoose');
const usersSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },email:{
        type:String,
        required:true,
    },password:{
        type:String,
        required:true,
    }
}) //convert this into A MONGOOSE schema 
module.exports= mongoose.model('User',usersSchema)