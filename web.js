var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.logger());
app.use(express.compress());
app.use('/javascripts',express.static(__dirname + '/javascripts'));
app.use('/stylesheets',express.static(__dirname + '/stylesheets'));

/*
app.configure(function(){
  app.use('/media', express.static(__dirname + '/media'));
  app.use(express.static(__dirname + '/public'));
});
*/


app.get('/', function(request, response) {
	var indexContents = fs.readFile('index.html', function (err, data) {
		if (err) throw err;
		console.log(data);
		response.send(data.toString());
	});
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});