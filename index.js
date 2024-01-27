const express = require('express');
const { mongooseClient } = require('./database/connection');
const { createPost, getAllPost } = require('./src/controller');
const app = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

require('dotenv').config()

app.post("/post", jsonParser, createPost);
app.get("/post", getAllPost);
 
app.listen(process.env.PORT, (err) => {
    if (err){
        console.log("FAILED TO START SERVER")
    }
    console.log(`********* SERVER STARTED ON ${process.env.PORT} *************`)
})