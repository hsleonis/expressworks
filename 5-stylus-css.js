var port = process.argv[2];
var file = process.argv[3];
var express = require('express');
var stylus = require('stylus');
var app = express();

app.use(stylus.middleware(file || path.join(__dirname, 'templates')));
app.use(express.static(file || path.join(__dirname, 'templates')));

app.listen(port);