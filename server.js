        var express = require('express');
        var morgan = require('morgan');
        var path = require('path');
        
        var app = express();
        app.use(morgan('combined'));
        
        
                    'article-two': {
                        title: 'Article Two | Lakshmi natraj',
                        heading: 'Article Two',
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
                                </p>`
                                },
                                'article-three': {
                            title: 'Article Three | Lakshmi natraj',
                            heading: 'Article Three',
                            date: 'Mar 13, 2018', 
                            content: `
                                          <p>
                                            This is the content for my third article.  This is the content for my third article. 
                                            </p>`
                                }
                                  };
                         
                         
                         function createTemplate (data) {
                             var title = data.title;
                             var data = data.date;
                            var heaading = data.heading;
                            var content = data.content;
                            
                         var htmlTemplate = 
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
            
            var counter = 0;
            app.get('/counter', function (req, res) {
                counter = counter + 1;
                res.send(counter.tostring());
            }};
            
            app.get('/:articleName', function (req, res) {
                //articlename--article-two
                //articles[articlename] -- {}content object for article two
        var articleName = req.param.articleName;
        res.send(createTemplate(articles[articlename]));
            }};
             
                app.get('/ui/style.css', function (req, res) {
            res.sendFile(path.join(__dirname, 'ui', 'style.css'));
            });
            
            app.get('/ui/main.js', function (req, res) {
            res.sendFile(path.join(__dirname, 'ui', 'main.js'));
            });
            
            app.get('/ui/madi.png', function (req, res){
             res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
        });
        
        var port = 80;
        app.listen(port, function () {
            console.log(`IMAD course app listening on port ${port}!`);
        });
        