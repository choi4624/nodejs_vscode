const http = require('http');
const url = require('url');
const fs = require('fs').promises;  
const path = require('path');
const querystring = require('querystring');

const server = http.createServer(async(req,res) =>{
    console.log(req.method);
    console.log(req.url);

// html return 
    let filename = null;
    let type1; 
    let filepath;

    if (req.url === '/') {
        filepath = path.join(__dirname, 'doc.html');    
    }
    else{
        filepath = path.join(__dirname, path.basename(req.url));
    }
    
    console.log(path.basename(req.url));
    console.log(path.extname(req.url));

    // if (req.url == '/image/:filename') {
    //     filename = req.params.filename;
    //     console.log('file name is '+filename);
    // }

    try{
    const data = await fs.readFile(filepath);
    if (path.extname(req.url) == '.html') {
       type1 = 'text/html; charset = utf-8';
    }
    else if(path.extname(req.url) == '.png'){
        type1 = 'image/png; charset = utf-8';
        
    }
    else if(path.extname(req.url) == '.jpg'){
        type1 = 'image/jpg; charset = utf-8';
    }

    res.writeHead(200, {'Content-Type': `${type1}`})
    res.end(data);

    }
    catch(err){
        console.log(err.message);
        res.writeHead(404, {'Content-Type': 'text/html; charset = utf-8'});
        res.end('<h1> 404 not found </h1>');
    }

}).listen(12381, ()=>{
    console.log('12381 ports work')
})




