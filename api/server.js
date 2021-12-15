const express = require('express')
const app = express();
require('dotenv').config();
const cors = require('cors');
const conectionToMongo = require('./db/db');
const authRoutes = require('./routes/auth')
const callsRoutes = require('./routes/calls')
const notFound = require('./middlewares/notFound')
const cookieParser = require("cookie-parser");



// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());



//variables
const port = process.env.PORT  || 5000
const url = process.env.MONGO_URL


//routes
app.use('/api/v1/auth', authRoutes )
app.use('/api/v1/call', callsRoutes )
app.use(notFound);

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