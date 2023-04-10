const http = require('http');
const fs = require('fs').promises;

// 함수 앞에 async 를 붙여야 await 를 할 수 있음 
const server = http.createServer(async function f(req, res) {
    
    const data = await fs.readFile('./sample.html');

    res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'}); //text html 타입 아니면 html로 안 봄. 예를들어 plain 
    res.write('<h1> hello !</h1>')
    res.end(data)
    console.log(req); //request 객체를 던져 보기
    console.log('================================'); //request 객체를 던져 보기
    console.log(res);
});

server.on('listening', ()=>{
    console.log('listen script'); //localhost:12380 
})

server.listen(12380, ()=>{
    console.log('starting at 12380'); //localhost:12380 
})