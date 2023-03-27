const o = require('./obj');

console.log(o); // obj 전체 출력 
console.log(o.a); // 전체를 받은 다음 특정 요소를 출력 

// 구조 분해 할당하여 가져오기 

const {a, b} = require('./obj');
// obj에 있는 것중 a와 b 속성만 가져옴 

console.log(a);
console.log(b);