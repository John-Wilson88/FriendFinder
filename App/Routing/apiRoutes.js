var express = require('express');
var users = require('../Data/users');

module.exports = function() {
	var router = express.Router();

	router.get('/api/users', function(req, res){
		return res.json(users);
	});

	router.post('/api/users', function(req, res){
		users.push(req.body);
		res.json(users);
		console.log("new user added");
	});

	return router;
};