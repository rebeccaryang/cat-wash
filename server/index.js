'use strict';
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Set up routes
require('./routes/index.js')(app, express);

// Set up static files
app.use(express.static(path.join(__dirname,'../client')));

// Set up ports
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('Server listening on port ', port);
});

module.exports = app;