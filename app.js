var port = process.argv[2];
var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended: true}));

app.post('/form', function(req, res) {
    res.send(req.body.str.split('').reverse().join(''));
});
app.listen(port);