const express = require('express');
const path = require('path');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({extended: false}));

// Gobal variables

// Routes
app.get('/',(req, res)=>{
    res.send('hello world');
});

// Static files
qpp.use(express.static(path.join(__dirname, 'public')));


module.exports = app