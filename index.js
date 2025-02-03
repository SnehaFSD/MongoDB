// const express = require('express')
// const { MongoClient } = require('mongodb');
import express from "express"
import { MongoClient } from "mongodb"
import * as dotenv from 'dotenv'
import cors from 'cors'
import { productsRoute } from "./routes/Products.js"
dotenv.config()

export const app = express()
const PORT = process.env.PORT

//Inbuilt middleware
//Interceptor || converting body to JSON in POST and PUT methods
app.use(express.json())
app.use(cors())

const MONGO_URL = process.env.MONGO_URL // this is atlas connection

//"mongodb://localhost:27017" //==>this is mongo compass connection
// //const MONGO_URL = "mongodb://127.0.0.127017"

async function createConnection(){
  const client = new MongoClient (MONGO_URL)
  await client.connect()
  console.log("MondoDB is connected")
  return client
}
export const client = await createConnection()

//req => what we send to server
//res =>what we receive from server
app.get('/', (req, res) =>  {
  res.send('Hello World')
})

app.use("/Products",productsRoute)

app.listen(PORT, () => console.log("Server Listening on PORT",PORT))


