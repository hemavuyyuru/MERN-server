//routes/users.js
const express= require('express')
const router = express.Router()
const User = require('../model/userSchema');

//REST API POST METHOD TO HANDLE POST REQUEST
router.post('/',(req,res)=>{
    try{
    const {_id,name,email,password}=req.body;
    const userQuery = new User({_id,name,email,password});
   // we can save it to the database
    userQuery.save()
    res.status(201).send({message:"User Created"});
    }catch(err){
        res.status(500).send({message:err})
    }
})
router.get('/',async (req,res)=>{
    try{
        const data=await User.find();
        res.status(201).send(data);
    }catch(err){
        res.status(500).send({message:err})
    }
})
//PUT the data (update the data)
//PUT the data (update the data)
router.put('/:id', async (req, res) => {
    try {
        const { password } = req.body;
        const userId = req.params.id;
         const updatedUser = await
          User.findByIdAndUpdate(userId, {password: password }, { new: true });
          //use findByIdAndUpdate instead of UpdateOne
        if (!updatedUser) {
            return res.status(404).send({ message: "User not found" }); }
        res.status(200).send({ message: "Password updated successfully", updatedUser });
    } catch (err) {
        res.status(500).send(err);
} });

router.delete('/users/:id', async (req, res) => {
    try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
    return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ message: "User deleted successfully", deletedUser });
    }catch(err) {
    res.status(500).send(err);
    }
   });



module.exports=router;


