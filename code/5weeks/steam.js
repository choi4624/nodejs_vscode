const fs = require('fs');

const readStream = fs.createReadStream('./superMe.txt', {highWaterMark: 16}); // 16바이트 짜리 버퍼임 
const data = [];

//on 이 이벤트 리스너임 data 라는 이벤트가 발생했을 때 작동 
readStream.on('data', (chunk)=>{ //chunk is buffer size data 
    data.push(chunk);
    console.log('data : ', chunk, chunk.length);
});
// data :  <Buffer 9d 8c ea b3 bc 20 ea b0 99 ec 8a b5 eb 8b 88 eb> 16 -->> 9d 는 앞 4비트 뒤 4비트 1바이트 구성 


readStream.on('end', () => { 
    console.log('end : ', Buffer.concat(data).toString());
});

readStream.on('error', (err) =>{
    console.log('error : ', err);
})

