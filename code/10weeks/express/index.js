const express = require('express');
const path = require('path');
const app = express();
const port = 12382;

// 미리 해석하는 미들웨어

app.use(express.urlencoded());
app.use(express.json());

function middles1(req,res,next) {

    console.log('미들웨어 1');
    next();

}

function middles2(req,res,next) {
    console.log('미들웨어2');
    next(); // 다음에 넘겨줘야 하므로 반드시 출력 
}

app.use(middles1);
app.use(middles2);

app.use('/static', express.static(path.join(__dirname, './public')));


// 'GET /' 에 대한 응답


app.get('/', function (req, res) {
    const querystring = req.query;
    console.log(querystring);

    res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/', middles1, (req, res) =>{
    console.log(req.query);
    res.sendFile(path.join(__dirname, './index.html'));

})

app.get('/about', function (req, res) {
    
    res.sendFile(path.join(__dirname, './about.html'));
});

app.get('/user', function (req, res) {
    
    res.sendFile(path.join(__dirname, './about.html'));
});

// 'POST /' 에 대한 응답
app.post('/', function (req, res) {
    console.log(req.body);
    res.send('Got a POST request');
});
// 'PUT /user' 에 대한 응답
app.put('/user', function (req, res) {
res.send('Got a PUT request at /user');
});
// 'DELETE /user' 에 대한 응답
app.delete('/user', function (req, res) {
res.send('Got a DELETE request at /user');
});

app.listen(port, () =>{
    console.log(path.join(__dirname, './index.html'));
    console.log(`${port} listening `);
});