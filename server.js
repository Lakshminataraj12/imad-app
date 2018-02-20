var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/article one requested', function (req, res) {
  res.sendFile('/aticle one is requested and will be servsed here');
});

app.app.get('/article two requested', function (req, res) {
  res.sendFile('/aticle two is requested and will be servsed herer ');
});

app.app.get('/article three requested', function (req, res) {
  res.sendFile('/aticle three is requested and will be servsed herer ');
});

get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
