const express = require('express');
const bodyParser = require('body-parser');
const { Data } = require('./database');

// Initialize Express app
const app = express();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.json());

// Define routes
app.post('/submit-data', (req, res) => {
// Extract the data from the request body
const data = req.body;

app.get('/analyze-data', (req, res) => {
    // Retrieve all data from the database
    Data.find({}, (err,data) =>{
    if(err)
    res.status(500).send(err);
    else{
    let sum = 0;
    data.forEach(d => {
        sum += d.data;
    });
    const average = sum / data.length;
    res.status(200).send({average});
    }
    });
});


// Save the data to the database
const newData = new Data({data});
    newData.save((err,data)=>{
    if(err)
    res.status(500).send(err);
    else
    res.status(200).send(data);
    });
    });

    app.get('/get-data', (req, res) => {
    // Retrieve all data from the database
    Data.find({}, (err,data) =>{
    if(err)
    res.status(500).send(err);
    else
    res.status(200).send(data);
    });
    });

    app.listen(3000, () => {
    console.log('Server started on port 3000');
});





