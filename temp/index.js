const usersModel = `apple//1234//사과사과
banana//4321//바나나나나
happy//qwer1234//해피해피`;
console.log(usersModel);

const userDatas = usersModel.split('\n'); // \: 원 기호
console.log(userDatas);
// [
//   'apple//1234//사과사과',
//   'banana//4321//바나나나나',
//   'happy//qwer1234//해피해피'
// ]

const users = []; // 유저 정보를 저장할 배열
const userIds = []; // 유저 아이디만 저장할 배열

for (let user of userDatas) {
  console.log(user);
  // apple//1234//사과사과
  // banana//4321//바나나나나
  // happy//qwer1234//해피해피

  users.push({
    realId: user.split('//')[0], // apple -> banana -> happy
    realPw: user.split('//')[1], // 1234 -> 4321 -> qwer1234
    name: user.split('//')[2], // 사과사과 -> 바나나나나 -> 해피해피
  });
  userIds.push(user.split('//')[0]); // apple -> banana -> happy
}
console.log(users);
// [
//   { realId: 'apple', realPw: '1234', name: '사과사과' },
//   { realId: 'banana', realPw: '4321', name: '바나나나나' },
//   { realId: 'happy', realPw: 'qwer1234', name: '해피해피' }
// ]

console.log(userIds);
// [ 'apple', 'banana', 'happy' ]

// ============================================================
// arr.indexOf(x): x가 arr 배열의 원소라면 해당 원소의 위치(인덱스값)을 반환
// 만약에 없다면 -1 반환
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.indexOf('apple')); // 0
console.log(fruits.indexOf('banana')); // 1
console.log(fruits.indexOf('cherry')); // 2
console.log(fruits.indexOf('orange')); // -1
