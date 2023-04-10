const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cookie-parser 모듈 불러오기
// : 요청의 쿠키를 해석해서 req.cookies 객체로 만듦
// ex. name=hello 라는 쿠키를 보내면, req.cookies => { name: 'hello' }
const cookieParser = require('cookie-parser');

// cookieParser(secretKey, optionObj);
// - secretKey: 비밀키
// - optionObj: 쿠키에서 사용할 옵션 값
app.use(cookieParser()); // req.cookies 가능 해짐

// res.cookie(key, value, options)
// : 쿠키 "설정"

// res.clearCookie(key, value, options)
// : 쿠키 "삭제"

const cookieConfing = {
  httpOnly: true, // 웹 서버를 통해서만 쿠키 접근 가능
  maxAge: 60 * 1000, // 쿠키 수명 (ms 단위)
  // expires: 만료 날짜 설정
  // secure: https 에서만 쿠키 접근
  // signed: 쿠키 암호화
};

app.get('/', (req, res) => {
  res.render('index');
});

// 1. 쿠키 설정
app.get('/setCookie', (req, res) => {
  // 쿠키 설정
  res.cookie('my first cookie', 'cookie value test', cookieConfing);

  // 클라이언트 응답 보냄
  res.send('쿠키 설정 완료!!');
});

// 2. 쿠키 확인
app.get('/getCookie', (req, res) => {
  // req.cookies
  // : cookie-parser 모듈이 만든 요청의 쿠키를 읽어옴
  res.send(req.cookies);
});

// 3. 쿠키 삭제
app.get('/clearCookie', (req, res) => {
  // 쿠키 삭제
  // clearCookie 할 때, res.cookie() 설정했던 key & value & option 일치해야 함
  // (단, option에서 expires, maxAge 옵션은 일치하지 않아도 괜찮!)
  res.clearCookie('my first cookie', 'cookie value test', cookieConfing);

  // 클라이언트 응답
  res.send('쿠키 삭제 완료!!');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
