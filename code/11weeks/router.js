const express = require('express');

const app = express();

const router = express.Router();

app.use(express.urlencoded());
app.use(express.json());

router.get('/name/:name', (req, res) => {
    res.send('이름 : ' + req.params.name); // :name 변수의 이름을 받아서 작동 
})

router.get('/about', (req, res) => {
    res.send('Get /about');
})



module.exports = router;