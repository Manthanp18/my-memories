const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
var fs = require('fs');


// routes
const memory = require('./routes/memory');

const app = express();

app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false },{ limit: '50mb'}));




// use Routes
app.use('/memories', memory);
app.use('/uploads',express.static('uploads'));


app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/memories')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));


app.listen(port, () => console.log(`Server running on port ${port}`));