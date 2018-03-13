// Counter code
var button =  document.getElementById('counter');
var counter = 0;

buttononclick = function () {
    
    // make  request to the counter endpoint
    
    // capture the response and store it in a variable
    
    // Render the variable in the correct span
    counter = counter + 1;
    var span =  document.getElementById('counter');
    span.innerHTML = counter.toString();
    };
