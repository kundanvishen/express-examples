var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');

var session;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(sessions({
	secret: 'mySecret',
	resave: false,
	saveUninitialized: true
}));

app.get('/login', function(req, res){
	session = req.session;
	if(session.uniqueID) res.redirect('/redirects');
	res.sendFile('./public/login.html', {root: __dirname});
});

app.post('/login', function(req, res){

	session = req.session;
	if(session.uniqueID) res.redirect('/redirects');

	if(req.body.username == 'admin' && req.body.password == 'admin') {
		session.uniqueID = req.body.username;
	}
	res.redirect('/redirects');

	res.end(JSON.stringify(req.body));
});

app.get('/logout', function(req, res){
	req.session.destroy();
	res.redirect('/login');
});

app.get('/redirects', function(req, res){
	session = req.session;
	if(session.uniqueID) {
		console.log(session.uniqueID);
		res.redirect('/admin');
	} else {
		res.end('Who are you?');
	}
});


app.get('/admin', function(req, res) {
	session = req.session;
	if (session.uniqueID) {
		console.log(session.uniqueID);
		res.end('Welcome to admin page');
	} else {
		res.redirect('/login');
	}	
})

app.listen(3000, function(){
	console.log('Server listening on port 3000');
});