var port = process.argv[2];
var file = process.argv[3];
var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

app.get('/home', function(req, res) {
    //app.use(express.static(file || path.join(__dirname, 'public')));
    res.render('index', {date: new Date().toDateString()});
});

app.listen(port);