const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middleware
app.use(express.urlencoded({extended: false}));

// Gobal variables

// Routes
app.get('/',(req, res)=>{
    res.render('index');
});

// Static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app