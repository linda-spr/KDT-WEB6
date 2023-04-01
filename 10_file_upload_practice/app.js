const express = require('express');
const app = express();
const PORT = 8000;

// multer 설정
const multer = require('multer');
const path = require('path');
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads')); // 이미지 파일 업로드 폴더
app.use('/static', express.static(__dirname + '/static')); // js, css static 폴더

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/result', uploadDetail.single('profile'), (req, res) => {
  console.log(req.file);
  // {
  //   fieldname: 'profile',
  //   originalname: 'peach.jpg',
  //   encoding: '7bit',
  //   mimetype: 'image/jpeg',
  //   destination: 'uploads/',
  //   filename: 'peach1680324245660.jpg',
  //   path: 'uploads\\peach1680324245660.jpg',
  //   size: 3593
  // }
  console.log(req.file.path); // 이미지 업로드된 경로
  console.log(req.body);
  // {
  //   userid: 'a',
  //   password: 'aa',
  //   username: 'a',
  //   age: '1'
  // }
  res.render('result', 
    { 
      userInfo: req.body, 
      src: req.file.path 
    });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
