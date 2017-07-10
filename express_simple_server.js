var express = require('express');
var path = require('path');
var app = express();
var port = 8080;

app.use('/css', express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname + '/views') });
});

app.get('/who/:name?/:title?', function(req, res) {
    var name = req.params.name;
    var title = req.params.title;

    res.send('<p>Name: ' + name + '</p><p>Title: ' + title + '</p>');
});


app.get('*', function(req, res) {
    res.send('Probably you are lost!');
});

app.listen(port, function() {
    console.log('Server is listening at port: ' + port);
});