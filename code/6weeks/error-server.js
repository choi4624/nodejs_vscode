const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async(req,res) =>{
    try{
    const data = await fs.readFile('./none.html');
    res.writeHead(200, {'Content-Type': 'text/html; charset = utf-8'});
    res.end(data);
    }
    catch(err){
        console.log(err.message);
        const data = await fs.readFile('./404not.html');
        res.writeHead(404, {'Content-Type': 'text/html; charset = utf-8'});
        res.end(data);
    }

}).listen(12381, ()=>{
    console.log('12381 ports work')
})

//Uncaught Error Error: ENOENT: no such file or directory, open './none.html' 
// ENOENT >> Error no entry

