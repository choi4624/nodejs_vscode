const fs = require('fs').promises;



console.log('시작');

fs.readFile('./readme.txt')
    .then((data) =>{
        console.log('1번', data.toString());
        return fs.readFile('./readme.txt');
    })
    .then((data) => {
        console.log('2번', data.toString());
        return fs.readFile('./readme.txt');
    })
    .catch((err) =>{
        console.error(err);
    })

// await version 
async function f(){
    console.log('await version 1번');
    const data  = await fs.readFile('./readme.txt');
    console.log(data.toString());
    console.log('await version 2번');
    const data2  = await fs.readFile('./readme.txt');
    console.log(data2.toString());
}

f();

// 앞의 promise 버전이랑 비동기적으로 진행되기 때문에 결과가 일정하게 나오지 않음 


    // .then((data) =>{
    //     console.log('1번', data.toString());
    //     return fs.readFile('./readme.txt');
    // })
    // .then((data) => {
    //     console.log('2번', data.toString());
    //     return fs.readFile('./readme.txt');
    // })
    // .catch((err) =>{
    //     console.error(err);
    // })
