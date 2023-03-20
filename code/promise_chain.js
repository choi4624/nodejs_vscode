//promise.js in lamda function version using chain 

//new promise로 promise 넣음
const promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("성공했음");
    }
    else{
        reject("실패했음");
    }
}).then((message) => {
        console.log(message);
        
        
        // return new Promise((resolve,reject) => {
        //     resolve('두번째 체인');
        // })

        // 바로 두번째 체인 처리하는 방법 
        return Promise.resolve("두번째 체인");
    })
    .then((message) => {
        console.log('2',message);

    })
    .catch((message) => {
        console.log(message);})
    .finally((message) => {
        console.log("무조건 실행");})

// new promise로 then catch finally 한번에 promise로 넣음 
// 한문장 코딩 

const promise1 = Promise.resolve('성공 1');
const promise2 = Promise.reject('성공 2');

// 배열 형식으로 출력이 나옴 
Promise.allSettled([promise1,promise2])
        .then((result) =>{
            console.log(result);
        }) // 한개의 promise라도 error가 나오면 error한 promise만 나옴 Allsettled 하면 결과가 개별적으로 나옴 
        .catch((error) => {
            console.error(error);
        })