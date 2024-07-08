const { MongoCryptKMSRequestNetworkTimeoutError } = require("mongodb")
const mongoose=require("mongoose")

const authorschema=mongoose.Schema({
    _id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    totalBooks:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})



module.exports=mongoose.model("Author",authorschema)