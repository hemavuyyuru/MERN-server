const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Author=require('../model/authorSchema')
//POST
router.post("/",(req,res)=>{
    try{
        const {_id,name,age,totalBooks,description}=req.body

        const insert=new Author({_id,name,age,totalBooks,description})
        //save the document insert
        insert.save()
        res.status(201).send({message:"Data is inserted",insert})
    }catch(err){
        res.status(500).send({message:err.message})
    }
})
//GET
router.get('/',async (req,res)=>{
    try{
        const data=await Author.find();
        res.status(201).send(data);
    }catch(err){
        res.status(500).send({message:err})
    }
})
module.exports=router;