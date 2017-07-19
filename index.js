/* ===================
   Import Node Modules
=================== */
const express = require('express'); // Fast, unopinionated, minimalist web framework for node.
const app = express(); // Initiate Express  back-end
const mongoose = require('mongoose'); // Node ORM Tool for MongoDB
const config = require('./config/database'); // Mongoose Config
const path = require('path'); // NodeJS Package for file paths

mongoose.Promise = global.Promise;

// Database Connection
mongoose.connect(config.uri, (err) => {
  // Check if database was able to connect
  if (err) {
    console.log('Could NOT connect to database: ', err); // Return error message
  } else {
    //console.log(config.secret);
    console.log('Connected to database: ' + config.db); // Return success message
  }
});

app.use(express.static(__dirname + '/client/dist/')); // Provide static directory for frontend

app.get('*', (req, res) => {
res.sendFile(path.join(__dirname +'/client/dist/index.html'));
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});






