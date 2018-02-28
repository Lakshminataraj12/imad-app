var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleTwo= {
    title: 'Article Two | Lakshmi natraj',
    heading: 'Article One',
    date: 'Feb 28, 2018', 
    content: ` <p>
                This is the content for my le.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article. 
                </p>
                <p>
                This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article. 
               </p>
                <p>
                This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article. 
            </p>'
            }
    
     

app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});


pp.get('/article-two', function (req, res) { 
 res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res){
 res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 80;
app.listen(port, function () {
console.log(`IMAD course app listening on port ${port}!`);
});
