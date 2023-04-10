const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async(req,res) =>{
    const data = await fs.readFile('./sample.html');
    res.writeHead(200, {'Content-Type': 'text/html; charset = utf-8'});
    res.end(data);
}).listen(12381, ()=>{
    console.log('12381 ports work')
})

