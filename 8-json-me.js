var port = process.argv[2];
var file = process.argv[3];
var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function(req, res) {
    fs.readFile(file, function(e, data){
        var obj = JSON.parse(data);
        res.json(obj);
    });
});

app.listen(port);


/*
// OFICIAL SOLUTION

var express = require('express')
    var app = express()
    var fs = require('fs')
    
    app.get('/books', function(req, res){
      var filename = process.argv[3]
      fs.readFile(filename, function(e, data) {
        if (e) return res.sendStatus(500)
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.sendStatus(500)
        }
        res.json(books)
      })
    })
    
    app.listen(process.argv[2])
*/