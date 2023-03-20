const { rmSync } = require('fs');
var http =require('http');

var port = 9000;

console.log('Starting at ${port}');

http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello World');

}).listen(port);