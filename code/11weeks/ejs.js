const express = require('express');
const path = require('path');
const app = express();
const port = 12382;



const router = require('./router');
const { appendFile } = require('fs');
router.use('/router', router)


app.use(express.urlencoded());
// post 에 대한 요청 처리 확인하기 
app.use(express.json());

app.use('/static', express.static(path.join(__dirname, './public')));

app.use('/', router);

app.listen(port, () =>{
    console.log(path.join(__dirname, './index.html'));
    console.log(`${port} listening `);
}); 



// ejs 사용

app.set('view engine', 'ejs'); //  ejs 모듈 사용 
app.set('views', './views');   // views의 폴더 경로 지정  



let array = ['배열 1', '배열 2', '배열 3', '배열 4'];

app.get('/', (req, res) =>{
    res.render('index',{text: 'asfdnb', array: array}); // 비우면 no option // { } 안에 값 넣기 
    // 변수가 ejs 파일로 넘어감 

})