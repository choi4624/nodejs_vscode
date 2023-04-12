const http = require('http');
const url = require('url');
const fs = require('fs').promises;  
const querystring = require('querystring');

const server = http.createServer(async(req,res) =>{
    console.log(req.method);
    console.log(req.url);
// uri 을 분석 
    const parsed = url.parse(req.url).query;
    console.log(parsed); // 여기서 필요한건 쿼리만 해당함 .query 입력
    const parsedQuery = querystring.parse(parsed);
    console.log(parsedQuery);
    console.log(parsedQuery.id); // query의 key 값중 id에 해당하는 것을 가져옴 
    console.log(parsedQuery.name);
    const parsedQueryNew = (querystring.parse(url.parse(req.url).query)).name; // 한줄코딩 
    console.log("result : " + parsedQueryNew);


// html return 
    let filename = null;

    if (req.url === '/') {
        filename = './index.html';
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




