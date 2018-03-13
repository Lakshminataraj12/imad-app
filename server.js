                var express = require('express');
                var morgan = require('morgan');
                var path = require('path');
                
                var app = express();
                app.use(morgan('combined')); 
      
      
        var articleTwo= {
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
              </p> `
                };
            
            fuction createTemplate (data) {
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
   
        
         
                                   
                
                var port = 80;
                app.listen(port, function () {
                    console.log(`IMAD course app listening on port ${port}!`);
                });
                