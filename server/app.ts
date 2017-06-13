var express = require('express'),
  app = express(),
  env = process.env.NODE_ENV || 'development',
  forceSsl = function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    return next();
  };

if (env === 'production') {
  app.use(forceSsl);
}

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
