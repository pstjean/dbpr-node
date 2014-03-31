var dbpr = require('./dbpr.js');
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(dbpr.rating());
}).listen(1337);

console.log('Server running at http://127.0.0.1:1337/');
