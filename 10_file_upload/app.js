const express = require('express');
const app = express();
const PORT = 8000;

// multer 미들웨어 사용하기
const multer = require('multer'); // multer 불러오기
const path = require('path'); // path 불러오기 (내장 모듈) => 파일, 폴더 경로를 쉽게 설정
const upload = multer({
  dest: 'uploads/', // dest: 업로드할 파일 경로 지정
});

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));

app.get('/', (req, res) => {
  res.render('index');
});

// single(): 하나의 파일 업로드할 때
// single()의 매개변수: input 의 name과 일치시키기!
app.post('/upload', upload.single('userfile'), (req, res) => {
  console.log(req.file); // 업로드한 파일 정보
  // {
  //   fieldname: 'userfile', // 폼에 정의한 name
  //   originalname: 'mango.jpg', // 사용자가 업로드한 파일명
  //   encoding: '7bit', // 파일 인코딩 타입
  //   mimetype: 'image/jpeg', // 파일 mime 타입
  //   destination: 'uploads/', // 파일 저장할 경로(폴더)
  //   filename: '3e5c3ad2fcf6a424c9f38bb2eeeb8d07', // destination에 저장된 파일명
  //   path: 'uploads\\3e5c3ad2fcf6a424c9f38bb2eeeb8d07', // 업로드된 파일의 전체 경로
  //   size: 4700 // 파일 크기 (byte)
  // }

  console.log(req.body); // 폼에 입력한 정보
  // { title: '이것은 망고다!!!' } // input title 에 입력합 값

  res.send('upload 완료~!!');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
