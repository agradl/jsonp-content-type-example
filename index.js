var express = require('express');
var app = express();

app.get('/bad-jsonp', function (req, res) {
  res.set('Content-Type','application/json');
  res.set('X-Content-Type-Options','nosniff');
  res.set('Access-Control-Allow-Origin', '*');
  res.send('alert("this is a bad jsonp response")');
});


app.get('/good-jsonp', function (req, res) {
  res.set('Content-Type','application/javascript');
  res.set('X-Content-Type-Options','nosniff');
  res.set('Access-Control-Allow-Origin', '*');
  res.send('alert("this is a good jsonp response")');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});