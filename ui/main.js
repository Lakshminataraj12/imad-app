
// Submit username/password to login
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    //create a request object
    var request = new XMLHttpRequest();
    
   // capture the response and store it in a variable
request.onreadystatechange = function () {
if (request.readyState == XMLHttpRequest.DONE) {
    // Take some action
    if (request.status == 200) {
        alert('Logged in successfully');
    }else if(request.status == 403) {
        alert('username/password is incorrect');
    }else if(request.status == 500) { 
        alert('Something went wrong on the server');
    }
        }
// Not done yet
};

// Make the request
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
console.log(username);
  console.log(username);   
 request.open('POST', 'http://lakshmiobh333.imad.hasura-app.io/login', true);
 request.send(Json.Stringify({username: username, password: password}));
  
    };