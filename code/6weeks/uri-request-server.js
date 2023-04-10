const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async(req,res) =>{
    console.log(req.method);
    console.log(req.url);

    let filename = null;

    if (req.url === '/') {
        filename = './index.html';
    }
    else if (req.url == '/about') {
        filename = './sample.html';
    }
    else{
        res.writeHeader(404, {'Content-Type': 'text/html; charset = utf-8'});
        return res.end('Not found');
    }

    try{
    const data = await fs.readFile(filename);
    res.writeHead(200, {'Content-Type': 'text/html; charset = utf-8'});
    res.end(data);
    }
    catch(err){
        console.log(err.message);
        res.writeHead(500, {'Content-Type': 'text/html; charset = utf-8'});
        res.end(err.message);
    }

}).listen(12381, ()=>{
    console.log('12381 ports work')
})




