import express from "express";
import mongoose from "mongoose";
//by default you can't use env variable in backend. you need another package to do that
import dotenv from "dotenv"; 

dotenv.config(); 
mongoose.connect(process.env.MONGO)
.then(()=>console.log("connected to db"))
.catch((err)=>console.log(err))

const app = express(); 

app.listen(3000, ()=>{
    console.log("Server is running on port 3000!!"); 
}); 

