var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('default');
});

app.listen(3000, function(req, res) {
    console.log('Listening on port 3000');
});