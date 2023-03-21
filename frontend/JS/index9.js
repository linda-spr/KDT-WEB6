// JS 표준 내장 객체
// 자바스크립트가 기본적으로 가지고 있는 객체
/* 
Object
Array
String
Number
Boolean

Math
Date : 시간, 날짜에 대한 정보를 얻기 위해 사용
*/
let now = new Date();
console.log(now);
console.log(now.getFullYear(),'년');
console.log(now.getMonth()+1,'월');//0~11
console.log(now.getDate(),'일')
console.log(now.getHours(),'시')
console.log(now.getMinutes(),'분')
console.log(now.getSeconds(),'초')
console.log(now.getMilliseconds(),'ms')
console.log(now.getDay());
//0:일요일 6:토요일

// Date 객체를 이용해 오늘의 요일을 얻고.
// 오늘이 평일인지 주말인지 작성해보기

/* switch 문 */
switch(now.getDay()){
    case 0: //일
    case 6: //토
        console.log('주말');
        break;
    default:
        console.log('평일');
        break;
}
/* 삼항연산자 */
let day = now.getDay()===0||now.getDay()===6 ? '주말' : '평일';
console.log(day);

// Math 객체
// 속성
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2); // 루트2

// 메소드
console.log(Math.min(45,2,0,-5,15));
console.log(Math.max(45,2,0,-5,15));
console.log(Math.random()); //0<= x < 1
console.log(Math.round(5.1)); //반올림 : 정수값으로
console.l
console.log(Math.floor(5.5)); //내림ath.ceil(5.22)); //올림

console.log(Math.floor(Math.random()*10)) // 0<= ~<10

// 1<= x <101
//0 <= x <100
//0<=x<1
console.log(Math.floor(Math.random()*100)+1);