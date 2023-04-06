const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// GET / => localhost:PORT/
router.get('/', controller.main);

// GET /visitor => localhost:PORT/visitor
router.get('/visitor', controller.getVisitors); // 전체 조회

// POST /visitor/write
router.post('/visitor/write', controller.postVisitor); // 하나 추가

module.exports = router;
