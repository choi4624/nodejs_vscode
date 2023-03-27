// 함수 이름과 설명 생략해도 b로 실행가능 

const b = async() => {
    let a = await Promise.resolve("결과b1");
    console.log(a);
};

b();

async function f() {
    let a = await Promise.resolve("결과f1");
    console.log(a);

    return "async 결과";
};
// async 의 리턴은 promise임 

let promise = f();

promise.then((message) => {
    console.log('then: ', message);

})


const promise1 = Promise.resolve("p1 결과");
const promise2 = Promise.resolve("p2 결과");

async function f(){
    for await (message of [promise1, promise2]){
        console.log(message)
    }
}

f();