require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose =require("mongoose");

const notesRouter = require("./routes/notes");
const { parse } = require('dotenv');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin:process.env.CLIENT_URL || 'http://localhost:5173'
}));
 app.use('/api/notes', notesRouter);

 async function start(){
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to mongodb");
        app.listen(PORT,()=>{console.log("Server running sucessfully!!")});
    }catch(err){
        console.error("Error occured !!!!",err);
        process.exit(1);
    }
 }
start();