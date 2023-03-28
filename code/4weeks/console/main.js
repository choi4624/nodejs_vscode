console.log('asdfhupiqowt');
console.error('error!!!!!!!!!!!!!!!!');

console.time('T1'); //각각의 타이머가 작동하여 동시에 진행이 될 수 있음, 이름으로 분류 

let alpha = '081raguoingqr'
console.log('qweuiftb');
console.log(alpha);

console.timeEnd('T1'); // 한줄만 나와야함 timeEnd - time ms 


const obj= {
    a:1,//0단계 
    b:2,
    c: { // 중첩된 객체 형태, 1단계
        d: 3,
        e: 4,
        f: {
            g:5,
            h:{
                i:6,
                j:7 // 4번 중첩 -> object라고 나옴 콘솔 log애서 3단계부턴 안나오게 
            }
        }
    }
}

console.log(obj);
console.dir(obj, {colors: true, depth: 4});

// 에러남 console.log(a) 
// 에러에서 나온 문구가 호출 스택임, 어떤 함수에서 호출했는지에 대한 목록이 나옴 

function a() {
    b();
}

function b( ) {
    console.trace(); // 오류가 나면 자동으로 호출 스택이 출력이 됩니다. 디버깅 할 때 호출스택을 잘 봐야 문제 라인을 추적 가능
}

a();

const arr = [
    { name: 'n1', birth: 2000},
    { name: 'n2', birth: 2002},
    { name: 'n3', birth: 2004}

];

console.table(arr);


