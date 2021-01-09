// Setup empty JS object to act as endpoint for all routes
//projectData = {};
const data = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* body-parser & Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Running local server
const port = 8080;

const server = app.listen (port, ()=>{console.log(`Im listening to the server: ${port}`)});

//Get Route
app.get('/all', (req, res)=>{res.send(data);});  
  
//Post Route

app.post('/add', addfeeling);

function addfeeling(req, res) { 
  let newData = req.body;
  let newEntry = {
    date: newData.date,
    temp: newData.temp,
    content: newData.content
  }
  data.push(newEntry);
  res.send(data);
  data = [];
  console.log(data);
}






// 1 listo -  Setup empty JS object to act as endpoint for all routes

// 1 listo - Express to run server and routes

// 1 listo - Start up an instance of app

/* 1 listo - Dependencies */

/* 1 listo - Middleware*/
              //Here we are configuring express to use body-parser as middle-ware.
// 1 listo - Cors for cross origin allowance

// 1 listo - Initialize the main project folder

// 1 listo - Spin up the server
// 1 listo - Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
  