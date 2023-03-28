function changeBgColor(newColor) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, 1000);
  });
}

// promise then() 이용
// changeBgColor('red')
//   .then(function () {
//     return changeBgColor('orange');
//   })
//   .then(function () {
//     return changeBgColor('yellow');
//   })
//   .then(function () {
//     return changeBgColor('green');
//   })
//   .then(function () {
//     return changeBgColor('blue');
//   });

// async/await 이용
async function exec() {
  await changeBgColor('red');
  await changeBgColor('orange');
  await changeBgColor('yellow');
  await changeBgColor('green');
  await changeBgColor('blue');
}

exec();
