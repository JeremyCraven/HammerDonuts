var express = require('express');
var router = express.Router();

// Path to views
var path = __dirname + '/../views/';

router.use(function(req, res, next) {
    // Default route
});

router.route('/').get(function(req, res) {
    res.sendFile(path + 'index.html');
});