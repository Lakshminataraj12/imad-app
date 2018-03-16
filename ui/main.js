// Submit username/password to login

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    //create a request object
    var request = new XMLHttpRequest();
    
   // capture the response and store it in a variable
request.onreadystatechange = function () {
if (request.readyState == XMLHttpRequest.DONE) {
    // Take some action
    if (request.status ==200) {
        alert('logged in successfully');
    }else if(request.status == 403) {
        alert('username/password is incorrect');
    }else if(request.status == 500) { 
        alert('Something went wrong on the server');
    }
        }
// Not done yet
};

// Make the request
var username = document.getElementId('username').value;
var password = document.getElementId('password').value;
console.login(username);
  console.login(username);   
 request.open('POST', 'http://lakshmiobh333.imad.hasura-app.io/login', true);
 request.Setrequest.Header('Content-Type','application/json');
    request.send(Json.Stringigy({username: username, password: password}));
    


}