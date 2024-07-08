//userSchema.js
//MongoDB user Schema 
//Capable of storing data in my mongodb
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
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
module.exports= mongoose.model('User',userSchema)

