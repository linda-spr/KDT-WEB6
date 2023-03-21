console.log('connected!');
/* 요소 선택
 - querySelector
 - querySelectorAll
 - getElementById
 - getElementsByClassName
 - ..
*/

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);

// 1. getElementById
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

// 2. getElementsByClassName
console.log(document.getElementsByClassName('pink'));
console.log(document.getElementsByClassName('others'));
console.log(document.getElementsByClassName('others')[0]);

// 3. getElementsByTagName
console.log(document.getElementsByTagName('div'));

// 4. getElementsByName
console.log(document.getElementsByName('id'));

// 5. querySelector
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name="id"]'));

// 6. querySelectorAll
console.log(document.querySelectorAll('.pink'));
console.log(document.querySelectorAll('input'));

console.log(document.querySelectorAll('.pink')[0]);
console.log(document.querySelectorAll('.pink')[1]);
console.log(document.querySelectorAll('.pink')[2]);
console.log(document.querySelectorAll('.pink')[3]);

let pinks = document.querySelectorAll('.pink');
console.log(pinks);
console.log('---')
for(let pink of pinks) {
    console.log(pink);
}

