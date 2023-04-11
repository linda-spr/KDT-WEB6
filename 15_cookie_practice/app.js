const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
// 쿠키 옵션 설정
const cookieConfig = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24, // 24h
};

app.get('/', (req, res) => {
  res.render('index', { popup: req.cookies.popup });
});

app.post('/setCookie', (req, res) => {
  // 쿠키 생성
  res.cookie('popup', 'hide', cookieConfig);
  res.send('쿠키 설정 완료!');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// cookie 정리!

// req 객체
// req.cookies: cookie-parser가 만드는 요청의 쿠키를 해석한 객체

// res 객체
// res.cookie(key, value, options): 쿠키 설정 메서드 
// res.clearCookie(key, value, options): 쿠키 삭제 메서드
