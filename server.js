// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

// CORS allows us to manage a Cross-origin resource sharing policy so that our front end can talk to the server.
const cors = require("cors");

// Enable All CORS Requests
app.use(cors());

//body-parser allow the backend to access JSON data sent from the client using request.body in POST route handler.
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Initialize the main project folder
app.use(express.static("new"));

const port = 4000;
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})

