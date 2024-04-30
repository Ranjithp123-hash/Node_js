const mongoose = require('mongoose');

require('dotenv').config();

// Define the MongoDB connection URL 
// const mongoURL = LOCAL_DB_URL  //Replace 'hotels'(it will create in your db automatically)  = database with your database name' 


// Live Database server connection 

const mongoAtlasURL = process.env.SERVER_DB_URL

const options = {
    useNewUrlparser: true,
    useUnifiedTopology: true 
}

// set up Mongoose connection
mongoose.connect( mongoAtlasURL, options)


const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connected to MongoDB server")
})

db.on('error', (err) => {
    console.log("MongoDB connection error", err);
})

db.on('disconnected', () => {
    console.log("MongoDB disconnected")
})


// Export the database connection 


module.exports = db;