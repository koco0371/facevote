/check.js*/
var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser')

var mysql = require('mysql');

router.use(cookieParser());

router.get('/', function (req, res, next) {
	console.log('check');
	var user = req.cookies.user;
	console.log(req.cookies.user);
	res.send(user);
	res.redirect('/');
});

module.exports = router;
