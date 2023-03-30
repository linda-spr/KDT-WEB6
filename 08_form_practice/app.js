const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs'); // view engine 등록
app.use('/views', express.static(__dirname + '/views')); // ejs를 담을 views 폴더 경로 설정
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱(분석)
app.use(express.json()); // json 형태로 데이터를 주고 받음

// Routing (경로 설정)
app.get('/', function (req, res) {
  res.render('index');
});

app.get('/practice1', function (req, res) {
  res.render('practice1');
});

app.get('/practice2', function (req, res) {
  res.render('practice2');
});

app.get('/result1', function (req, res) {
  console.log(req.query);
  // res.send('get 폼 전송 완료');
  res.render('result', {
    title: '실습1 폼 전송 완료!',
    userInfo: req.query,
  });
});

app.post('/result2', function (req, res) {
  console.log(req.body);
  res.render('result', {
    title: '실습2 폼 전송 완료!',
    userInfo: req.body,
  });
});

app.listen(PORT, function () {
  console.log('웹 서버 실행!!');
  console.log(`http://localhost:${PORT}`);
});
