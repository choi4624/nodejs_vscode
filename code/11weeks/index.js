const express = require('express');
const path = require('path');
const app = express();
const port = 12382;

const router = require('./router');
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

// 위에가 기본 코드 

// 아래는 라우터 코드 

    app.use('/users', router);

// app.use('/info', ); // 어떤 경로에 대한 라우터를 사용할 건지 정의 해야함 
// info 라는 경로에 대해서 작동하겠다 선언 
/*
    /info/ 
    /info/about
    이런 경로로 작동 

 */


/* req 객체 사용하기 */ 

    app.use((req,res,next) => {
    console.log(req.get('Content-Type'));
    req.app.get('test');
    next();
    })

// request 헤더에 대한 것 중 헤더 이름을 리턴해주는 req.get("헤더이름")

// post 요청 보냈는데, 파라미터가 안읽어지는 경우 보통 콘텐트 타입이 잘못된게 많음 


    app.get('/', (req, res) => {
    const obj = {
        a: 'aaa',
        b: 'bbb',
        c: 'ccc'
        };

   res.json(obj);
    // json을 몰라서 send로 보내는 경우
    // res.send(JSON.stringify(obj)); // res.json과 같음 어라라
    })

/**
 * 쿠키 다루기 
 */

    const cookiePraser = require('cookie-parser');
    app.use(cookiePraser('tempsecret'));// 미들웨어 쿠키파서 등록 
    // () 안에 비밀 문자열을 넣어서 해석 (키 값)
    // req.secret = 'tempsecret';  을 안 넣어도 자동으로 동작하게 함  
    /**
     * 미들웨어 중에 () 넣는 경우, 안해도 되는 경우, 
     * 괄호가 없으면 자체 미들웨어임 
     * 괄호가 있으면 자체 미들웨어가 아니라 다른 걸 불러와서 리턴? 
     */

    app.get('/cookie', (req,res) => {
        console.log(req.headers); // 쿠키 생기기 이전의 request 
        console.log(req.cookies); // 쿠키파서로 쿠키만 나오게 하기  
        res.cookie('abc', 'abcd1234');
        res.cookie('def', 'defg1234'); 
        // 새로고침하면 쿠키 생긴걸 볼 수 있음  
        
        //signed cookie
        req.secret = 'tempsecret'; 
        res.cookie('signedCookie1', 'secretValue', {httpOnly: true, signed: true});
            // 쿠키의 값을 바꿀 수 없게 만들어서 인증함 
            // 값은 보임 
        console.log(req.signedCookies);

        res.send('Hello');
    })

/**
 * 세션 구현하기 
 * nodejs 는 세션이 없고 
 * express 는 세션을 지원해주는 프레임워크 ? 
 * 
 */

    const session = require('express-session');
    const MemoryStore = require('memorystore')(session);
    // 정보를 저장하는 방법 
    // 1 메모리 
    // 2 파일 
    // 3 데이터베이스 (???) 
    app.use(
        session({
            secret: 'P@ssW0rd',
            resave: false,
            saveUninitialized: true,
            store: new MemoryStore({
                checkPeriod: 60000, // 60000ms = 60min 동안 유지 
            }),
            // store 종류에 따라 dbstore , filestore 등으로 변경해야 함 
            cookie: { maxAge: 60000},
            // 세션의 ID를 쿠키에 저장하는 것 > 쿠키의 옵션 설정 
        })
    );
        // 세션 미들웨어 
        // 접속 시 세션 생성 
        // 쿠키는 창 닫으면 사라지는게 기본, 시간을 지정하면 그 기간동안 유효함 

    app.get('/session', (req, res) =>{
        req.session.num++;
        req.session.abc = 'aiqsgu';

        console.log(req.session);
        // req.session에 무언가를 쓰면, 세션 미들웨어가 저장하고 쓰는 등의 작업을 진행함 

        res.end();
    })
