var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 80;

app.use('/assets', express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'public/assets/images')));

app.use('/', require(__dirname + '/controllers/routes.js'));

app.listen(port, function () {
    console.log('Listening on port 80...');
});