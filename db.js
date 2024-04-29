const mongoose = require('mongoose');


// Define the MongoDB connection URL 
const mongoURL = "mongodb://localhost:27017/hotels" //Replace 'hotels'(it will create in your db automatically)  = database with your database name' 

const options = {
    useNewUrlparser: true,
    useUnifiedTopology: true 
}

// set up Mongoose connection
mongoose.connect( mongoURL, options)


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