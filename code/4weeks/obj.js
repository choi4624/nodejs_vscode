a = 10;
b = 20;
const obj = {a ,b};
let o; 
o = obj;
// console.log(o);

obj.c = 30;

console.log(obj);

module.exports.a = 15; // 원 오브젝트에 a 추가 
module.exports.b = 30; // 원 오브젝트에 b 추가 
// 아무것도 없는 오브젝트에 a b 요소 추가 

// console.log(module);
// console.log(module.exports);

// module.exports = {
//     a,b
// }