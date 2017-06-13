var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/test', function (req, res) {
  res.send('Hello World! 1');
});

app.get('/#/test', function (req, res) {
  res.send('Hello World! 2');
});

app.listen(3003, function () {
  console.log('ControlAir server started');
});
