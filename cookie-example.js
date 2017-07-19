var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());




app.get('/', function(req, res) {
	res.cookie('myCookie', 'Some value');
	res.send('Welcome to cookie examples file, check your cookies now!<br> Go to /removeCookies to delete all cookies');
});

app.get('/removeCookie', function (req, res) {
	res.clearCookie('myCookie');
	res.send('Cookies cleared!');
});


app.listen(3000, function(){
	console.log('Server listening on port 3000');
});
