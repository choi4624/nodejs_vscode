const http = require('http');
const url = require('url');
const fs = require('fs').promises;  
const querystring = require('querystring');
const path = require('path/posix');

const server = http.createServer(async(req,res) =>{
    console.log(req.method);
    console.log(req.url);


// uri 을 분석 
    // get 부분

    // const parsed = url.parse(req.url).query;
    // console.log(parsed); // 여기서 필요한건 쿼리만 해당함 .query 입력
    // const parsedQuery = querystring.parse(parsed);
    // console.log(parsedQuery);
    // console.log(parsedQuery.id); // query의 key 값중 id에 해당하는 것을 가져옴 
    // console.log(parsedQuery.name);
    // const parsedQueryNew = (querystring.parse(url.parse(req.url).query)).name; // 한줄코딩 
    // console.log("result : " + parsedQueryNew);

    
    // post 부분
    let postdata = '';
    
    //event handler를 사용해서 제어하기 
    req.on('data', (data) =>{
        postdata = postdata + data; // postdata 에 data가 청크 단위로 추가됨 
    })

    // 끝날때 출력하게 해줘야함 안그러면 undefined 출력함 (비동기 ㅅㄱ)
    req.on('end', () =>{
        console.log(postdata);
        const postQuery = querystring.parse(postdata);
        // console.log(postQuery);
        // console.log(postQuery.id);
        // console.log(postQuery.name);
    })




// html return 
    let filename = null;

    if (req.url === '/') {
        filename = './index2.html';

    }
    else if (req.url == '/index2.html') {
        console.log(path.dirname(req.url));
        console.log(path.extname(req.url));
        console.log(path.basename(req.url));
        console.log(__dirname); 
        
        filename = path.join(__dirname, '/html/', path.basename(req.url))
        console.log(filename);
    }
    else if (req.url == '/image') {
        const img_data = await fs.readFile('./2023-04-09_231009.png');

        res.writeHead(200, {'Content-Type': 'image/png; charset = utf-8'});
        return res.end(img_data);
    }
    else{

        res.writeHeader(404, {'Content-Type': 'text/html; charset = utf-8'});
        return res.end('Not found');
    }


    try{
    const data = await fs.readFile(filename);
    res.writeHead(200, {'Content-Type': 'text/html; charset = utf-8'});
    res.writeHead(data);

    }
    catch(err){
        console.log(err.message);
        res.writeHead(500, {'Content-Type': 'text/html; charset = utf-8'});
        res.end(err.message);
    }


}).listen(12381, ()=>{
    console.log('12381 ports work')
})




