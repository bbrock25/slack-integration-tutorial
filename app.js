var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

var bot = require('./bot');
var dicebot = require('./dicebot');

// body parser middleware
app.use(bodyParser.urlencoded( { extended: true}));

// routes
app.get('/', function(req, res) { res.status(200).send('Hello World');});
app.post('/hello', bot);
app.post('/roll', dicebot);

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function() {
  console.log('Slack bot is listening on port ' + port);
});
