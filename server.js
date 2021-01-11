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

const data = []

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
  
