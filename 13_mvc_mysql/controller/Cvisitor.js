const Visitor = require('../model/Visitor');

// (1) GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render('index');
};

// (2) GET /visitor => localhost:PORT/visitor
exports.getVisitors = (req, res) => {
  console.log(Visitor.getVisitors());
  res.render('visitor', { data: Visitor.getVisitors() });
};
