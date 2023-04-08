// [before]
// const Visitor = require('../model/Visitor');
// [after]
// models 변수 값 = models/index.js에서 export 한 db 객체
const models = require('../models'); // models/index.js 내보내는 값
// console.log(models);

// (1) GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render('index');
};

// (2) GET /visitor => localhost:PORT/visitor
exports.getVisitors = async (req, res) => {
  // [bofore] mysql db 연결!
  // Visitor.getVisitors((result) => {
  //   console.log('Cvisitor.js >>', result);
  //   // => [ {}, {}, {} ]
  //   res.render('visitor', { data: result });
  // });
  // => SELECT * FROM visitor;

  // [after] sequelize
  // ver1. then() 메서드 사용
  // models.Visitor.findAll().then((result) => {
  //   console.log('findAll >> ', result); // [ {}, {}, {}, {} ]
  //   res.render('visitor', { data: result });
  // });

  // ver2. async/await 사용
  const result = await models.Visitor.findAll();
  console.log('findAll >> ', result); // [ {}, {}, {}, {} ]
  res.render('visitor', { data: result });
};

// (3) POST /visitor/write
exports.postVisitor = async (req, res) => {
  // [before]
  // console.log(req.body);
  // Visitor.postVisitor(req.body, (result) => {
  //   console.log('Cvisitor.js >>', result); // model 코드에서 데이터를 추가한 결과인 rows.insertId
  //   res.send({ id: result, name: req.body.name, comment: req.body.comment });
  // });
  // => insert into visitor(name, comment) values('${data.name}', '${data.comment}');

  // [after]
  const result = await models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  });
  console.log('create >> ', result);
  // visitor {
  //   dataValues: { id: 8, name: 'sean', comment: '안뇽' },
  //   _previousDataValues: { name: 'sean', comment: '안뇽', id: 8 },
  //   uniqno: 1,
  //   _changed: Set(0) {},
  //   _options: {
  //     isNewRecord: true,
  //     _schema: null,
  //     _schemaDelimiter: '',
  //     attributes: undefined,
  //     include: undefined,
  //     raw: undefined,
  //     silent: undefined
  //   },
  //   isNewRecord: false
  // }
  res.send(result);
};

// (5) DELETE /visitor/delete
exports.deleteVisitor = async (req, res) => {
  // [before]
  // console.log(req.body); // { id: n }
  // Visitor.deleteVisitor(req.body.id, (result) => {
  //   console.log('Cvisitor.js >> ', result);
  //   res.send('삭제 성공!!');
  // });
  // => delete from visitor where id=${id}

  // [after]
  // models.Visitor.destroy({
  //   where: { id: req.body.id },
  // }).then(() => {
  //   res.end();
  // });

  await models.Visitor.destroy({
    where: { id: req.body.id },
  });
  res.end();
};

exports.getVisitor = async (req, res) => {
  // [before]
  // console.log('*', req.query); // { id: n }
  // Visitor.getVisitor(req.query.id, (result) => {
  //   console.log('**', result); // model callback에서 넘겨주는 rows[0] => {}
  //   res.send(result);
  // });
  // => select * from visitor where id=${id};

  // [after]
  const result = await models.Visitor.findOne({
    where: { id: req.query.id },
  });
  console.log('findOne >> ', result);
  // visitor {
  //   dataValues: { id: 3, name: '성춘향111', comment: '안뇽111' },
  //   _previousDataValues: { id: 3, name: '성춘향111', comment: '안뇽111' },
  //   uniqno: 1,
  //   _changed: Set(0) {},
  //   _options: {
  //     isNewRecord: false,
  //     _schema: null,
  //     _schemaDelimiter: '',
  //     raw: true,
  //     attributes: [ 'id', 'name', 'comment' ]
  //   },
  //   isNewRecord: false
  // }
  res.send(result);
};

exports.patchVisitor = async (req, res) => {
  // [before]
  // console.log(req.body);
  // Visitor.patchVisitor(req.body, () => {
  //   res.send('수정 성공!');
  // });
  // => update visitor set name='${data.name}', comment='${data.comment}' WHERE id=${data.id}

  // [after]
  const result = await models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  console.log('update >> ', result);
  res.end();
  // res.send('수정 완료');
};
