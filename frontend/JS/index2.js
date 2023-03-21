/* 
자료형
 - 기본
    - string
    - number
    - boolean
    - null
    - undefined

- 객체
    - array
    - object
*/

// 1.string
let myName = '길동';
let email = 'gildong@naver.com';
let city = '"서울"';

console.log(myName);
console.log(email);
console.log(city);

// 문자와 변수를 동시에 출력,
console.log('내 이름은', myName, '이고 이메일은', email, '입니다.');
console.log('내 이름은' + myName + '이고 이메일은' + email + '입니다.');
// 템플릿 리터럴
console.log(`내 이름은 ${myName}이고 이메일은 ${email}입니다. `);
let gildong = `내 이름은 ${myName}이고 이메일은 ${email}입니다. `;
console.log(gildong);

// 2. number
let number = 123;
let opacity = 0.7;
console.log(number);
console.log(opacity);
// NaN :not a number
console.log('apple' - 3);

// 3. boolean
let checked = true;
let unchecked = false;

console.log(checked);
console.log(unchecked);

// 4. undefined
let undef;
console.log(undef);

// 5. null
let empty = null;
console.log(empty);

// 6. array
let fruits = ['orange', 'pineapple', 'grape', 'apple'];
let fruits2 = new Array('orange', 'pineapple', 'grape', 'apple');

console.log(fruits[0], fruits[1]);

let data1 = [1, 'allie', false, null, undefined];
console.log(data1[4]);

// array : 2차원 배열

let korean = [
  ['가', '나', '다'],
  ['라', '마', '바'],
  ['사', '아', '자'],
];

console.log(korean[0][0]);
console.log(korean[1][1]);

let letters = [
  ['사', '스', '자', '크'],
  ['진', '안', '리', '이'],
  ['가', '수', '림', '나'],
  ['아', '으', '차', '운'],
];

console.log(letters[3][0]);
console.log(letters[1][3]);
console.log(letters[0][1]);
console.log(letters[0][3]);
console.log(letters[2][2]);

// 3차원 배열
let nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

console.log(nums[1][0][1]);

// 7. object key-value

let cat = {
  name: '나비',
  age: 1,
  isCute: true,
  mew: function () {
    return '냐옹';
  },
};

console.log(cat);
// 점 표기법
// 오브젝트이름.key이름
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew());
// 대괄호 표기법
// 오브젝트이름['key이름']
console.log(cat['name']);

/* typeof 사용 */
let und;
console.log(typeof '문자');
console.log(typeof 123);
console.log(typeof true);
console.log(typeof cat);
console.log(typeof nums);
console.log(typeof NaN);
console.log(typeof null);
console.log(typeof und);

console.log(`${typeof 1} isn't ${typeof '1'} data type`);
console.log(
  'typeof 를 array 이나 null 에 사용하면' +
    typeof {} +
    '결과를 얻을 수 있습니다.'
);

// 형변환
// let mathScore = prompt('수학 점수를 입력하세요'); //80
// let engScore = prompt('영어 점수를 입력하세요'); //90

//
// let avg = (mathScore + engScore) / 2;

// console.log(avg);

// 1. -> 문자 String()
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));
console.log(typeof str1);
console.log(typeof str1.toString());

//2. ? ->숫자 Number()
let n1 = true;
let n2 = false;
let n3 = '123.9';

console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);

console.log(typeof Number(n1)); //1
console.log(typeof Number(n2)); //0
console.log(typeof Number(n3)); //123.9

console.log(Number(n1));
console.log(Number(n2));
console.log(Number(n3));
console.log(parseInt(n3));