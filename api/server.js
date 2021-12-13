const express = require('express')
const app = express();
require('dotenv').config();
const conectionToMongo = require('./db/db');


// middleware
app.use(express.json());

//variables
const port = process.env.PORT  || 5000
const url = process.env.MONGO_URL




//server up and runnight
const server = async ()=>{
    try {
        await conectionToMongo(url);
        app.listen(port,()=>{
            console.log("backend running")
        })
    } catch (error) {
        console.log(error)
    }
}

//start server
server();