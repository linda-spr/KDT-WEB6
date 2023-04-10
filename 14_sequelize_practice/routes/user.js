// 회원가입/로그인 관련 라우터 설정
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// localhost:PORT/user 기본 경로
router.get('/signup', controller.signup);

router.get('/signin', controller.signin);

router.post('/signup', controller.post_signup);

router.post('/signin', controller.post_signin);

router.post('/profile', controller.post_profile);

router.post('/profile/delete', controller.delete_profile);

router.post('/profile/edit', controller.edit_profile);

module.exports = router;
