const express=require('express')
const cors=require('cors')
const connection = require('./Config/mongo')
const dotenv=require('dotenv')
const router = require('./Router')

connection()

const app=express()
app.use(express.json())
app.use(cors())
app.use("/",router)
dotenv.config()
Port=8000
app.listen(Port,console.log(`Running on port ${Port}`))