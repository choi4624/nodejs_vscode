const fs = require('fs').promises;


async function f(){
    const data1 = await fs.readFile('./readme.txt');

    console.log(data1.toString('hex'));
    console.log(data1.toString('base64'));
}

f();