console.log('연결!');

// 산술 연산자
/* 
+
-
/
*
*/

let a = 5;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);

// 비교 연산자
// 동등한지 비교 (== , ===)
// == : 값만 비교
console.log(1 == 1);
console.log(1 == 2);
console.log(1 != 2);
console.log(1 != 1);
console.log('1' == 1);
console.log('1' != 1);

console.log('--------------------');
// === : type과 값 모두 비교
console.log(1 === 1);
console.log(1 === 2);
console.log(1 !== 2);
console.log(1 !== 1);
console.log('1' === 1);
console.log('1' !== 1);

// 크기 비교
// > < <= >=
console.log(2 > 1);
console.log(2 >= 2);
console.log(2 < 1);
console.log(2 <= 2);

console.log('-----------------');
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(false || false);
console.log(false || true);
console.log(true || true);
console.log(!(2 > 1)); // false
console.log(2 > 1 && -2 < 1); //true
console.log((2 > 1 && -2 < 1) || 5 > 2); //true

// 동등연산자 2개(관대한 연산자)

console.log(1 == '1');
console.log('0' == false);
console.log('' == 0);
console.log(null == undefined);

console.log('----------------');
let num1 = '3';
let num2 = 2;
let num3 = '10';

// 문자열 끼리의 연산
// 더하기 연산은 : 나열
// 더하기 외의 연산은 실제로 연산이 이루어짐
console.log(num1 + num3);
console.log(num3 - num1);
console.log(num3 * num1);
console.log(num3 / num1);

// 문자열 & 숫자
console.log(num1 + num2); // 32
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
