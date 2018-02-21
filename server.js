var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/article-one requested', function (req, res) {
  res.sendFile('Article one requested and will be served here');
});


app.get('/article-two requested', function (req, res) {
  res.sendFile('Article two requested and will be served here');
});


app.get('/article-three requested', function (req, res) {
  res.sendFile('Article three requested and will be served here');
});


app.get('/uistyle.css', function (req,res){
    res.sendFile(path.join(__dirname,'ui','style.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080;
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
