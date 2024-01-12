import express from "express";
import mongoose from "mongoose";
//by default you can't use env variable in backend. you need another package to do that
import dotenv from "dotenv"; 
import authRouter from "./routes/auth.route.js"; 



dotenv.config(); 
mongoose.connect(process.env.MONGO)
.then(()=>console.log("connected to db"))
.catch((err)=>console.log(err))

const app = express(); 
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("hello from server"); 
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000!!"); 
}); 

app.use("/api/auth", authRouter); 






