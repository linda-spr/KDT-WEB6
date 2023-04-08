// TODO: 컨트롤러 코드
const User = require('../model/User');

exports.index = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};

exports.signin = (req, res) => {
  res.render('signin');
};

exports.post_signup = (req, res) => {
  console.log(req.body); // 사용자가 폼에 입력한 정보

  User.post_signup(req.body, () => {
    // res.end(): 데이터 없이 응답할 때 사용
    res.end();
  });
};

exports.post_signin = (req, res) => {
  console.log(req.body); // 폼에 입력한 로그인 정보

  User.post_signin(req.body, (result) => {
    console.log(result);
    // 존재하는 유저로 로그인시 -> [ {} ]
    // 존재하지 않는 유저로 로그인시 -> []

    if (result.length > 0) {
      // 로그인 성공
      res.send(true);
    } else {
      // 로그인 실패
      res.send(false);
    }
  });
};

exports.post_profile = (req, res) => {
  console.log(req.body);

  User.post_profile(req.body.userid, (result) => {
    console.log(result); // [ {} ]

    if (result.length > 0) {
      res.render('profile', { data: result[0] });
    }
  });
};

exports.delete_profile = (req, res) => {
  console.log(req.body);

  User.delete_profile(req.body.id, () => {
    res.end();
  });
};

exports.edit_profile = (req, res) => {
  console.log(req.body);

  User.edit_profile(req.body, () => {
    res.end();
  });
};
