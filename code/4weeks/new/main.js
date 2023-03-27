const g =require('./func');

// console.log(g); exports 자체로 하면 이렇게 
console.log(g.f); // exports.* 형태로 하면 이렇게 요소를 제대로 불러오기 

g.f();