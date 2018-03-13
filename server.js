var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleTwo= {
    title: 'Article Two | Lakshmi natraj',
    heading: 'Article One',
    date: 'Feb 28, 2018', 
    content: `
    <p>
                This is the content for my le.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article. 
                </p>
                <p>
                This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article. 
               </p>
                <p>
                This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article. 
            </p>'
            };
            var articlethree= {
    title: 'Article Three | Lakshmi natraj',
    heading: 'Article three',
    date: 'Feb 28, 2018', 
    content: `
              <p>
                This is the content for my article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article. 
                </p>
                <p>
                This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article. 
               </p>
                <p>
                This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article.  This is the content for my first article. 
            </p>'
            };
 
 function createTemplate (data) {
     var title = data.title;
     var data = data.date;
    var heaading = data.heading;
    var content = data.content;
    
 var htmlTemplate = '
 <html>
 <head>
 <title>
 ${title}
 </title>
 <meta name="viewport" content="width=device-width, initialscale=1" />
    <link href="/ui/style.css" rel="stylesheet"/> 
 </head>
 <body>
 <div class="container">
 <div>       
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
            </div>
 <div>
          ${content}
          </div>
          </div>
          </body>
          </html>
          ';
          return htmlTemplate;
 }
 
 app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req, res) {
 res.send(createTemplate(articleTwo));
});

app.get('/article-three', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
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
