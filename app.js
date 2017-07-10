var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// to specify another folder other than views
// app.set('views', __dirname + '/templates');

// app.get('/', function(req, res) {
//     res.render('default');
// });

// Example to pass parameters to templates
app.get('/', function(req, res) {
    res.render('default', {
        title: 'Home',
        users: ['John', 'Henry', 'Mark']
    });
});


app.get('/example1', function(req, res) {
    res.render('example1', {
        title: 'Home',
        users: ['John', 'Henry', 'Mark']
    });
});

app.listen(3000, function(req, res) {
    console.log('Listening on port 3000');
});