function f( ) {
    console.log('타임아웃!')
}

// setTimeout(() => {
//     console.log('즉시 실행')
// }, 0);

setTimeout(f, 1500); // 1.5초뒤 실행 

let id = setInterval(f, 1000);

function g() {
    console.log('정지');
    clearInterval(id);
}

setTimeout(g, 3000);

setTimeout(function f( ) {
    console.log('타임아웃2!')
}, 1000); // 이렇게도 됨 
 
setTimeout(() => {
    console.log('마지막')
}, 1000);