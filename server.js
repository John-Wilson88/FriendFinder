// npm Modules
var express = require('express');
var bodyParser = require('body-parser');
var apiRou = require('./App/Routing/apiRoutes');
var htmlRou = require('./App/Routing/htmlRoutes');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(apiRou());
app.use(htmlRou());

app.listen(PORT, function(){
	console.log("Friend Finder is listen in on port " + PORT);
});