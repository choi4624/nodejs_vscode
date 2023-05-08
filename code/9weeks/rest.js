const http = require('http');
const url = require('url');
const fs = require('fs').promises;  
const path = require('path');
const querystring = require('querystring');


const users = {0: '유저1', 1:'유저2' , 2: 'adgsji0', 3: 'ㅂ거'};
let count = 2; // id 를 생성할 순서 

const server = http.createServer(async(req,res) =>{

    console.log(users);

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
        console.log(req.url);


        if (!req.url.startsWith('/user/')) {
            return;
        }
        const id = req.url.split('/')[2]; // '/' 을 기반으로 list 만들어서 나눔 [int] 를 통해 n 번째 요소 가져오기 

        console.log(id);

        let postdata = ''; // 파라미터를 여기에 읽을 것임 
        // post에 썻던 것을 약간 수정해서 등록 
        req.on('data',(data)=>{
            postdata += data;
        })
        req.on('end', () => {
            console.log(postdata);
            // 해석을 먼저 해야함 
            users[id] = querystring.parse(postdata).name;

            console.log(users);

            res.writeHead(200, {'Content-Type' : 'text/html; charset = utf-8'});
            res.end('put 응답'); // 데이터가 없어도 end는 해야함 이거 해야 head 데이터도 보냄 
        })

    }
    else if (req.method === 'DELETE') {
        console.log(req.url);


        if (!req.url.startsWith('/user/')) {
            return;
        }

        const id = req.url.split('/')[2]; // '/' 을 기반으로 list 만들어서 나눔 [int] 를 통해 n 번째 요소 가져오기 
        delete users[id];

        res.writeHead(200, {'Content-Type' : 'text/html; charset = utf-8'});
        res.end('delete 응답'); // 데이터가 없어도 end는 해야함 이거 해야 head 데이터도 보냄 
        console.log(users);
    }


}).listen(12382, ()=>{
    console.log('12382 ports work')
})