var express = require('express');


var app = express();
var router = express.Router();


app.get('/', function(req, res){
	res.send('Express Advanced Routing Example 2');
});



app.listen(3000, function(){
	console.log('Server listening on port 3000');
});