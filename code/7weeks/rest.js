const http = require('http');
const url = require('url');
const fs = require('fs').promises;  
const path = require('path');
const querystring = require('querystring');


const users = {0: '유저1', 1:'유저2'};
let count = 2; // id 를 생성할 순서 

const server = http.createServer(async(req,res) =>{

    
    if (req.method === 'GET') {
        if (req.url == '/') {
            let filepath = 'index.html';
            const data = await fs.readFile(path.join(__dirname, filepath));
             res.writeHead(200, {'Content-Type' : 'text/html; charset = utf-8'})
             return res.end(data);
        }
        if (req.url == '/about') {
            let filepath = 'about.html';
            const data = await fs.readFile(path.join(__dirname, filepath));
            res.writeHead(200, {'Content-Type' : 'text/html; charset = utf-8'})
            return res.end(data);   
        }
        if (req.url === '/users') {
            console.log(users);
            res.writeHead(200, {'Content-Type' : 'application/json; charset = utf-8'});
            return res.end(JSON.stringify(users));
        }
        else{
            try {
                const data = await fs.readFile(path.join(__dirname, req.url));
                return res.end(data);
            } catch (error) {
                res.writeHead(404);
                return res.end('not found' + error);
            }

        }

    }
    else if (req.method === 'POST') {
        let postdata = ''; // 파라미터를 여기에 읽을 것임 
        // data 이벤트가 발생햇을 때, 청크를 postdata로 추가하기 
        req.on('data',(data)=>{
            postdata += data;
        })
        req.on('end', () => {
            console.log(postdata);
            // 해석을 먼저 해야함 
            console.log(querystring.parse(postdata));
            console.log(querystring.parse(postdata).name);
            
            users[count] = querystring.parse(postdata).name;
            count++;
            console.log(users);
            res.writeHead(302, {'Location' : '/' });
            return res.end(); // 데이터가 없어도 end는 해야함 이거 해야 head 데이터도 보냄 
        })
    }
    else if (req.method === 'PUT') {
        
    }
    else if (req.method === 'DELETE') {
        
    }


}).listen(12382, ()=>{
    console.log('12382 ports work')
})