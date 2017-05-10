var express = require('express');
var path = require('path');
var router = express.Router();

// Path to views
var views_path = __dirname + '/../views/';

router.use(function(req, res, next) {
    // Default route
    next();
});

router.route('/').get(function(req, res) {
    console.log('---REQUEST---');
    res.sendFile(path.resolve(views_path) + '/index.html');
});

module.exports = router;