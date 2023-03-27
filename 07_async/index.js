// setTimeout()
// setTimeout(code, delay)
// : delay(ms 단위) 동안 기다리가다 code 함수 실행

/* 
console.log(1);
setTimeout(function () {
  console.log(2);
}, 2000);
console.log(3);

// setTimtout -> 1초 후에 body 태그의 배경색상을 빨간색으로 바꾸기
setTimeout(function () {
  // 1. body 태그를 선택
  // 2. 배경 색상을 빨간색 변경
  document.querySelector('body').style.backgroundColor = 'red';
}, 1000);

// 1초 후에 h1 태그 글자 색상을 파란색
function changeColor() {
  document.querySelector('h1').style.color = 'blue';
}
setTimeout(changeColor, 1000);
*/

// ###################################################
// 비동기 처리
// ex. 편의점에 들어가서 음료수를 사고 나오는 상황
/*
function goMart() {
  console.log('마트에 가서 어떤 음료 살지 고민!');
}

function pickDrink() {
  // setTimeout 을 이용해 3초 고민한 후에 코드 실행
  setTimeout(function () {
    console.log('고민 끝~!');
    product = '제로 콜라';
    price = 2000;
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

let product; // undefined
let price; // undefined
goMart();
pickDrink();
pay(product, price);
*/

// 왜 undefined가 뜰까?
// (컴퓨터 해석)
// 1. goMart() 함수 확인 -> pickDrink() 함수 확인 -> pay() 함수 확인
// 2. product 전역 변수 만듦, price 전역 변수 만듦
// 3. goMart() 함수 실행 (콘솔 로그 찍기)
// 4. pickDrink() 함수 실행
// 4-1. 3초 대기 (그런데!! js는 "비동기 처리" -> 이 코드가 끝날 때까지 기다리지 않고, 다음 코드 바로 실행~)
// 5. pay() 함수 실행
// 4-1. 3초 대기 끝
// 4-2. function () {} 함수 실행 (콘솔 로그 찍기, product 변수에 값 할당, price 변수에 값 할당)

// ###################################################
// 콜백 함수로 해결해보자!
// : 다른 함수의 실행이 끝난 뒤에 실행되는 함수
// : 어떤 함수의 파마리터(매겨변수, 인자)로 쓰임

/*
function goMart() {
  console.log('마트에 가서 어떤 음료 살지 고민!');
}

function pickDrink(callback) {
  // *callback: 매개변수가 될 콜백함수
  setTimeout(function () {
    console.log('고민 끝~!');
    product = '제로 콜라';
    price = 2000;
    callback(product, price); // * 매개변수로 넘긴 콜백함수를 실행
  }, 3000);
}

let product; // undefined
let price; // undefined
goMart();
pickDrink(function (product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
});
*/

// ###################################################
// 콜백 지옥
// : 콜백함수가 반복되어 코드의 들여쓰기가 너무 깊어짐
// => 가독성/유지보수성 하락

// 1초마다 배경색이 변경되는 코드
// 빨 -> 주 -> 노 -> 초 -> 파
setTimeout(function () {
  document.querySelector('body').style.backgroundColor = 'red';
  setTimeout(function () {
    document.querySelector('body').style.backgroundColor = 'orange';
    setTimeout(function () {
      document.querySelector('body').style.backgroundColor = 'yellow';
      setTimeout(function () {
        document.querySelector('body').style.backgroundColor = 'green';
        setTimeout(function () {
          document.querySelector('body').style.backgroundColor = 'blue';
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
