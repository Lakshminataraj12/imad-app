                var express = require('express');
                var morgan = require('morgan');
                var path = require('path');
                
                var app = express();
                app.use(morgan('combined')); 
      
      
                
         
                                   
                
                var port = 80;
                app.listen(port, function () {
                    console.log(`IMAD course app listening on port ${port}!`);
                });
                