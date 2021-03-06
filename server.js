                var express = require('express');
                var morgan = require('morgan');
                var path = require('path');
                var Pool = require('pg').Pool;
                 var crypto =require('crypto');
                 var bodyParser =require('body-parser');
                 
            var config = {
                user: 'lakshmiobh333',
                database: 'lakshmiobh333',
                host: 'db.imad.hasura-app.io',
                port: '5432',
                password: process.env.DB_PASSWORD
                 };   
            
            var app = express();
                app.use(morgan('combined')); 
                app.use(bodyParser.json());
      
     var articles = {  
    title: 'Article Two | Lakshmi Natraj',
    heading: 'Article Two',
    date: 'Feb 26, 2018', 
    content: `
              <p>
          This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article.
                </p>
                <p>
                     This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article.
                 
                <p>
                         This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article.
              </p>`
                },
       articlethree = {    
                                    title: 'Article Three | Lakshmi Natraj',
                                    heading: 'Article Three',
                                    date: 'Mar 13, 2018', 
                                    content: `
                                                  <p>
                                                    This is the content for my third article .  This is the content for my third article . 
                                                    </p>`
                                    
                                        };
       
        function createTemplate (data) {
                var title = data.title;
                var date = data.date;
                var heading =data.heading;
                var content =data.content;
            
 var htmlTemplate =`
 <html>
    <head>
        <title> 
       ${title}
         </title>
        <meta name="viewport" content="width-device-width, initial-scale=1" />
           <link href="/ui/style.css" rel="stylesheet.css" />
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
       `;
        return htmlTemplate;
            }
   
   app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'index.html'));
    });
    
    
    function hash (input, salt) {
        // How do we create a hash?
        var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
        return ['pbkkdf2', '10000', salt, hahed.toString('hex')].join("$");
        }
        
        
  app.get('/hash/:input', function(req, res) {
      var hashedString = hash(req.params.input, "this-is-the-same-random-string") ;
  res.send(hashedString);
  });
  
 app.get ('/create-user', function (req, res) {
      // username, password
      // "username":"Lakshmi", "password":"paassword"
      // JSON
      var username = req.body.username;
      var password =req.body.password;
      var salt = crypto.randomBytes(128).toString('hex');
      var dbstring = hash(password, salt);
      pool.query('INSERT INTO "user" (username, password) VALUES ($1, $2)', [username, dbstring], funtion (err, result)); {
            if (err) {
                res.staus(500).send(err.toString());
            }else {
                res.send('user successfully created:' + username);
            }
      }
  });
  
    var pool = new Pool(config);
    app.get('/test-db', function (req, res) {
        // make a select request
        // return a response with the results
        pool.query('SELECT * FROM test', function (err, result) {
            if (err) {
                res.staus(500).send(err.toString());
            } else {
                res.send(JSON.stringify(result, rows));
            }
            });
    });
        

          var counter = 0;
                    app.get('/counter', function (req, res) {
                        counter = counter + 1;
                        res.send(counter.toString());
                    });
                    var names = [];
                    app.get('/submit-name', function(req, res) { // /submit-name?name-xxxx
                    // Get the name from the request
                    var name = req.query.name;
                    
                    names.push(name);
                    // JSON: Javascript object notation
                    res.send(JSON.stringify(names));
                    });
                    
                     app.get('/artcles/:articleName', function (req, res) {
                        //articlename--article-two
                        //articles[articlename] -- {}content object for article two
                var articleName = req.param.articleName;
                res.send(createTemplate(articles[articlename]));
                    });
                     
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
                