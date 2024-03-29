var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(__dirname)); 
app.listen(process.env.PORT || 3000);