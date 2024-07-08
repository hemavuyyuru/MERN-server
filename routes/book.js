const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Book=require('../model/BookSchema')
    //POST
router.post("/", async (req,res)=>{
    try{
        const {_id,name,publisher,description, author_id}=req.body

        const insert=new Book({_id,name,publisher,description, author_id})
        //save the document insert
        await insert.save();
        const authfetch = await Author.findById(author_id);
        if (!authfetch) {
            return res.status(404).send({ message: "Author not found" });
        }
        authfetch.totalBooks += 1;
        await authfetch.save();
        
        res.status(201).send({message:"Data is inserted",insert})
    }catch(err){
        res.status(500).send({message:err.message})
    }
})

router.get('/',async (req,res)=>{
    try{
        const books = await Book.find();
        res.status(200).send(books);
    }catch(err){
        res.status(500).send(err.message)
    }
})
module.exports=router;

