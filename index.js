var express = require('express');
//var path = require('path');
var app = express();

var port = process.env.PORT || 80;

//app.use('/assets', express.static(path.join(__dirname, 'assets')));
//app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/', require('./controllers'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.listen(port, function () {
    console.log('Listening on port 80...');
});