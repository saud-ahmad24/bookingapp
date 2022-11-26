import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/auth.js"
import hotelsRoute from "./routes/auth.js"
import roomsRoute from "./routes/auth.js"

dotenv.config();
const app= express();

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
      } catch (error) {
       throw error;
      }
}
mongoose.connection.on("disconnectd",()=>{
        console.log("mongoDB disconnected")
})
mongoose.connection.on("connectd",()=>{
    console.log("mongoDB connected")
})

//middlewares
app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)

app.get("/",(req,res)=>{
    res.send("Home")
})


app.listen(8800,()=>{
    connect();
    console.log("connected successfully")
})