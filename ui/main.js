// Counter code
var button =  document.getElementById('counter');

buttononclick = function () {
    
    // Create a request object
    var request = new XMLHttpRequest();
    
    // capture the response and store it in a variable
request.onreadystatechange = function () {
if (request.readyState == XMLHttpRequest.DONE) {
    // Take some action
    if (request.status ==200)
    var counter = request.responseText;
    var span = document.getElementbyI('count');
    span.innerHTML = counte.toString();
}
}
    // Not done yet
};

    // Make the request
    request.open('GET', 'http://lakshmiobh33.imad.hasura-app.io/counter',true);
    request.send(null)
    };
