// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'codingon',
});

exports.post_signup = (data, callback) => {
  // data: req.body
  // callback: sql문 실행 후, 할 일 함수
  const sql = `insert into user (userid, name, pw) 
                values ('${data.userid}', '${data.name}', '${data.pw}');`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('model post_signup >> ', rows);
    // OkPacket {
    //   fieldCount: 0,
    //   affectedRows: 1,
    //   insertId: 5,
    //   serverStatus: 2,
    //   warningCount: 0,
    //   message: '',
    //   protocol41: true,
    //   changedRows: 0
    // }
    callback();
  });
};

exports.post_signin = (data, callback) => {
  const sql = `select * from user 
                  where userid = '${data.userid}' and pw = '${data.pw}' LIMIT 1;`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('model post_signin >>', rows); // [ {} ]
    callback(rows);
  });
};

exports.post_profile = (userid, callback) => {
  const sql = `select * from user where userid = '${userid}' LIMIT 1;`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('model post_profile >>', rows);
    callback(rows);
  });
};

exports.delete_profile = (id, callback) => {
  const sql = `delete from user where id = '${id}';`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('model delete_profile >>', rows);
    // OkPacket {
    //   fieldCount: 0,
    //   affectedRows: 1,
    //   insertId: 0,
    //   serverStatus: 2,
    //   warningCount: 0,
    //   message: '',
    //   protocol41: true,
    //   changedRows: 0
    // }
    callback();
  });
};

exports.edit_profile = (data, callback) => {
  const sql = `update user set 
    userid='${data.userid}', name = '${data.name}', pw='${data.pw}' 
    where id='${data.id}';`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('model edit_profile >>', rows);
    // OkPacket {
    //   fieldCount: 0,
    //   affectedRows: 1,
    //   insertId: 0,
    //   serverStatus: 2,
    //   warningCount: 0,
    //   message: '(Rows matched: 1  Changed: 1  Warnings: 0',
    //   protocol41: true,
    //   changedRows: 1
    // }
    callback();
  });
};
