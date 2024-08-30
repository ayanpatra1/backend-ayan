// require('dotenv').config({path:'./env'})//this is not good beacust it distroy consentency
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
  path:'./.env'
})

connectDB()














/*
import express from "express"

;( async()=>{

  try {
     await mongoose.connect(`${process.env.MONGODB_URI }/
      ${DB_NAME}`)
     app.on("errror", (error) =>{

      console.log("ERROR:", error);
      throw error
     })
     app.listen(process.env.PORT, ()=>{
      console.log(`App is listing on port ${process.env.PORT} `);
     })

  } catch (error) {
    console.error("ERROR", error)
    throw err
    
  }
})()*/