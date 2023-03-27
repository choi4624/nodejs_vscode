module.exports.a = 11;


console.log(this); //어떤 함수도 들어있지 않는 this는 module.exports
console.log(module.exports); 

function f() {
    console.log(this); // global 을 출력함?  
}

f() 