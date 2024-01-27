const mongoose = require('mongoose');
require('dotenv').config()
const { MONGO_URL, DATABASE } = process.env;

mongoose.connect(`${MONGO_URL}/${DATABASE}`);
const db = mongoose.connection;

db.on('error', () => {
    console.log("Error while connecting the database");
})

db.on('open', () => {
    console.log(`Database connected to ${DATABASE}`);
})

exports.mongooseClient = mongoose;
