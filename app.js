// Importing Packages
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

require('./Db/conn');

app.use(express.json())
// Import product Route
const productRoute = require('./routes/productRoute');

   

// Custom Middleware
app.use('/api/v1/product',productRoute)

// Running the server
const portName = process.env.port;
app.listen(portName, ()=> { 
    console.log(`Server is running on ${portName}....`)
})