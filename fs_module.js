var fs = require('fs');


fs.readFile('demo.html', function(err, data) {
    if (err) { console.log(err); }
    console.log(data.toString());
});