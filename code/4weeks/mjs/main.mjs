import {odd, even} from './var.mjs'; // import 시 확장자 명시
import checkOddOrEven from './func.mjs';
// 위에는 분해할당 
// 아래는 복사 

console.log(odd);
console.log(even);

function checkStringOddOrEvent(str) {
    if (str.length % 2) {
        return odd;
    }
    return even;
}

console.log(checkOddOrEven(10));
console.log(checkStringOddOrEvent('hello'));