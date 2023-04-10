// TODO: 컨트롤러 코드
const models = require('../models');

exports.signup = (req, res) => {
  res.render('signup');
};

exports.signin = (req, res) => {
  res.render('signin');
};

exports.post_signup = async (req, res) => {
  // [before]
  // console.log(req.body); // 사용자가 폼에 입력한 정보
  // User.post_signup(req.body, () => {
  //   // res.end(): 데이터 없이 응답할 때 사용
  //   res.end();
  // });

  // [after]
  await models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  });
  res.end();
};

exports.post_signin = async (req, res) => {
  // [before]
  // console.log(req.body); // 폼에 입력한 로그인 정보
  // User.post_signin(req.body, (result) => {
  //   console.log(result);
  //   // 존재하는 유저로 로그인시 -> [ {} ]
  //   // 존재하지 않는 유저로 로그인시 -> []
  //   if (result.length > 0) {
  //     // 로그인 성공
  //     res.send(true);
  //   } else {
  //     // 로그인 실패
  //     res.send(false);
  //   }
  // });

  // [after]
  const result = await models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  });
  console.log('>>>>>> ', result);
  // 로그인 성공; result = {}
  // 로그인 실패; result = null

  if (result) {
    res.send(true);
  } else {
    res.send(false);
  }
};

exports.post_profile = async (req, res) => {
  // [before]
  // console.log(req.body);
  // User.post_profile(req.body.userid, (result) => {
  //   console.log(result); // [ {} ]

  //   if (result.length > 0) {
  //     res.render('profile', { data: result[0] });
  //   }
  // });

  const result = await models.User.findOne({
    where: { userid: req.body.userid },
  });
  console.log('>>>>>', result); // {}
  if (result) {
    res.render('profile', { data: result });
  }
};

exports.delete_profile = async (req, res) => {
  // [before]
  // console.log(req.body);
  // User.delete_profile(req.body.id, () => {
  //   res.end();
  // });

  // [after]
  await models.User.destroy({
    where: { id: req.body.id },
  });
  res.end();
};

exports.edit_profile = async (req, res) => {
  // [before]
  // console.log(req.body);
  // User.edit_profile(req.body, () => {
  //   res.end();
  // });

  // [after]
  await models.User.update(
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { id: req.body.id },
    }
  );
  res.end();
};
