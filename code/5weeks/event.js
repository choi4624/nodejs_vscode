const EvenEmitter = require('events');

const e = new EvenEmitter();

// 이벤트를 들으면, 이벤트를 (data) 파라미터 받아서 람다함수 실행 
e.addListener('aaa', (data) => {
    console.log('aaa: ' + data);
})

e.addListener('aaa', (data) => {
    console.log('두번째 aaa: ' + data);
})


e.emit('aaa', 'asdf'); // 이벤트를 발생함 , 뒤는 데이터     

e.emit('aaa', ['aaa', 'asdf']); // 한번에 실행 