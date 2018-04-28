var path = require('path');
var express = require('express');

module.exports = function(){
	var router = express.Router();

	router.get('/', function(req, res){
		return res.sendFile(path.join(__dirname, '../Public/home.html'));
	});

	router.get('/survey', function(req, res){
		return res.sendFile(path.join(__dirname, '../Public/survey.html'));
	});

	return router
};