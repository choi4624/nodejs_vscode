// promise는 오래 걸리는 걸 했을때 끝나면 가져오는 함수 

// 성공적으로 끝나면 resolve, 아니면 reject 호출
function callback(resolve, reject) {
    let success = false;
    if (success) {
        resolve("성공했음");
    }
    else{
        reject("실패했음");
    }
}

const promise = new Promise(callback); // 콜백함수가 들어가야 함. 

// resolve 할 때의 결과가 메시지로 들어감 
function thencallback(message){
    console.log(message);
}
function catchcallback(message){
    console.log(message);
}
function finallycallback(message){
    console.log("무조건 실행");
}

//성공한 경우 resolve 케이스의 경우 then을 내보냄
//실패한 경우 reject 케이스의 경우 catch를 내보냄
// finally 로 무조건 실행됨 
promise.then(thencallback).catch(catchcallback).finally(finallycallback);



