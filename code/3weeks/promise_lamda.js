//promise.js in lamda function version

//new promise로 promise 넣음
const promise = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve("성공했음");
    }
    else{
        reject("실패했음");
    }
}).then((message) => {
        console.log(message);})
    .catch((message) => {
        console.log(message);})
    .finally((message) => {
        console.log("무조건 실행");})

// new promise로 then catch finally 한번에 promise로 넣음 
// 한문장 코딩 