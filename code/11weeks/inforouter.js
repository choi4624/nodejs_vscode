const express = require('express');

const app = express();

// 이중라우터 구현가능 
const inforouter = express.Router();

app.use(express.urlencoded());
app.use(express.json());

router.get('/', (req, res) => {
    res.send('Get /');
})

router.get('/about', (req, res) => {
    res.send('Get /about');
})

module.exports = inforouter;