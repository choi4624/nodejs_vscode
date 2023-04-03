const fs = require('fs'); //fs 모듈을 가져와야 함. 

const path = require('path');




fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data); // ASCII data 
    console.log(data.toString()); // 문자열로 변경 
});

console.log('끝'); // 얘가 먼저 시작함 

const newfs = require('fs').promises;

newfs.readFile('./readme.txt')
    .then((data) => {
        console.log(data);
        console.log(data.toString);
    })
    .catch((err) => {
        console.error(err);
        console.log('newfs err');
    })

console.log('promise version')

