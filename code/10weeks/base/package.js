const http = require('http');
const url = require('url');
const fs = require('fs').promises;  
const path = require('path');
const querystring = require('querystring');

const server = http.createServer(async(req,res) =>{
    res.writeHead(200, {'Set-cookie': 'cooike_name=abcd'});
    res.end('쿠키');
    console.log();


}).listen(12383, ()=>{
        console.log('12383 ports work')
    })