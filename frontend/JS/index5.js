console.log('연결!');

helloWorld1();
function helloWorld1() {
  console.log('helloWorld1');
}
helloWorld1();

function helloWorld2() {
  return 'helloWorld2';
}

helloWorld2();
console.log(helloWorld2());

/* function add(num1, num2) {
  return num1 + num2;
}
function add2(num1, num2) {
  console.log(num1 + num2);
}

let result = add(5, 5);
let result2 = add2(5, 5);
console.log(result, result2); */

// 2. 함수 표현식
// 선언 전 호출 불가능
let helloWorld3 = function () {
  console.log('helloworld3');
};
helloWorld3();

// 3. 화살표 함수
let helloWorld4 = () => {
  console.log('helloWorld4');
};
helloWorld4();

// 매개 변수 있는 version!
function sayHello1(text) {
  return text;
}

console.log(sayHello1('안녕하세요'));

function sayHello2(text, name) {
  return `${text} ${name}`;
}

console.log(sayHello2('hi', '진형'));

//multifly
function multifly(a, b) {
  return a * b;
}
console.log(multifly(6, 4));

//square
const square = (a) => {
  console.log(a ** 2);
};

square(5);
