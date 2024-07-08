const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({
    _id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author_id:{
        type:Number,
        required:true
    }
});


module.exports=mongoose.model("Book",bookSchema)