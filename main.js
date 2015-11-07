var http = require("http");

http.createServer(function(request, response){

    //Send the HTTP Header
    //Status: 200 ok
    //Content-type: text/plain
    response.writeHead(200, {'Content-type':'text/plain'});

    //Send the response body as "Hello World"
    response.end("Hello World Yefry\n");

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081');