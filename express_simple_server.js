var express = require('express');
var path = require('path');
var app = express();
var port = 8080;

app.use('/css', express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname + '/views') });
});

app.listen(port, function() {
    console.log('Server is listening at port: ' + port);
});