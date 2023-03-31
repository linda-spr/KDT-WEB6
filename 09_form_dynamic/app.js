const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing (주소 설정)
app.get('/', function (req, res) {
  res.render('dynamic');
});

// 1-1. /ajax get 요청
app.get('/ajax', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// 1-2. /ajax post 요청
app.post('/ajax', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 2-1. /axios get 요청
app.get('/axios', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// 2-2. /axios post 요청
app.post('/axios', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 3-1. /fetch get 요청
app.get('/fetch', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// 3-2. /fetch post 요청
app.post('/fetch', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
