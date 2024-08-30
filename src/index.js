// require('dotenv').config({path:'./env'})//this is not good beacust it distroy consentency
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
  path:'./.env'
})

connectDB()
.then(() =>{
  app.listen(process.env.PORT || 8000 , () => {
    console.log(`Server is running port :${process.env.PORT}`)
  })
})
.catch((err)=>{
  console.log("mongo Db connectimn Faild ")
})














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