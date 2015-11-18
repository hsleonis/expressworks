var port = process.argv[2];
var express = require('express');
var app = express();

app.get('/search', function(req, res) {
    var query = req.query;
    res.send(query);
});

app.listen(port);