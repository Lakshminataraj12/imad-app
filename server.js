var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/artcile-one', function (req, res) {
     res.sendFile('Article one requested and will be served here');
});

app.get('/artcile-two', function (req, res) {
     res.sendFile('Article two requested and will be served here');
});

app.get('/artcile-three', function (req, res) {
     res.sendFile('Article three requested and will be served here');
});

app.get('/ui/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'ui.css'));
});

app.get('/ui/madi.png', function (req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080;
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
