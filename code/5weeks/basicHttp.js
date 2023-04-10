const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1> hello !</h1>')
    res.end('<p> end request! </p>')
    console.log(req); //request 객체를 던져 보기
    console.log('================================'); //request 객체를 던져 보기
    console.log(res);
}).listen(12380, ()=>{
    console.log('starting at 12380'); //localhost:12380 
})