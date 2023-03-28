function changeBgColor(newColor) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, 1000);
  });
}

changeBgColor('red')
  .then(function () {
    return changeBgColor('orange');
  })
  .then(function () {
    return changeBgColor('yellow');
  })
  .then(function () {
    return changeBgColor('green');
  })
  .then(function () {
    return changeBgColor('blue');
  });
