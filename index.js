const express=require('express')
const mongoose=require("mongoose")
const {ApolloServer,gql}=require('apollo-server-express')
const cors = require('cors');

const app=express()

const port=3001
const typeDefs= require('./schema')
const resolvers = require('./resolvers')
const userApiFromRouter= require('./routes/userRoutes')
const url = "mongodb+srv://hemasriv8888:Vuheka%401234@cluster1.sklwhtm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1 "
app.use(express.json())
app.use(cors())

mongoose.connect(url,{UseNewUrlParser:true,
    useUnifiedTopology:true})
    .then(()=>{console.log('DB Connected')})
    .catch((err)=>{console.log(err)})
    
const server=new ApolloServer({typeDefs,resolvers})
app.post('/register',async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        const {data,error}= await server.executeOperation({
            query:gql`
            mutation{
               createUser(input:{name:"${name}",email:"${email}",password:"${password}"})
               {
               id
               name
               email
               password
            }
            }`
        });
        if(error){
            console.log(error)
            return res.status(500).send({message:error})}
        res.status(201).send({message:"User created",data:data});
    }catch(err){
        console.log(err)
        res.status(500).send({message:err});}
})

async function StartServer(){
    await server.start()
    server.applyMiddleware({app});
    app.listen(port,()=>{console.log(`Server live` )})
}

function Testing(){
    return 1;
}  
Testing();
StartServer();