var express = require('express');
var app = express();

var router = express.Router();

app.use('/myFirstAdvancedRoute', router);

router.get('/page1', function(req, res){
	res.end('This is page 1');
});

app.get('/', function(req, res) {
	res.end('Welcome to home page');
});



app.get('/myFirstRoute', function(req, res) {
	res.send('This is definitely not my first route!');
});

app.listen(3000, function(){
	console.log('Server listening on port 3000');
});