//파일 쓰기 

const p = require('fs').promises;

p.writeFile('./writeme.txt', '한글과 영어를 쓰는 방법. write korean and english')
    .then(() => {
    console.log('writeFile');
    })