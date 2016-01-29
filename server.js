var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(1337, function(){
	console.log("Working on port 1337")
})