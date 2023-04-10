// TODO: visitor 모델(-> 테이블 구조) 정의
// sequelize 모델과 mysql table 연결(대응)

const Visitor = function (Sequelize, DataTypes) {
  // Sequelize: models/index.js 에서 sequelize
  // DataTypes: models/index.js 에서 Sequelize

  // Sequelize.define(param1, param2, param3)
  // param1: 모델 이름 설정
  // param2: 컬럼 정의
  // param3: 모델 옵션 정의
  const model = Sequelize.define(
    'visitor', // param1: 모델(테이블) 이름 설정
    {
      id: {
        // id INT NOT NULL PRIMARY KEY auto_increment,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        // name VARCHAR(10) NOT NULL,
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        // comment MEDIUMTEXT
        type: DataTypes.TEXT('medium'),
      },
    }, // param2: 컬럼 정의
    {
      tableName: 'visitor', // 실제 db table명
      freezeTableName: true, // 테이블명 고정!
      timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
    } // param3: 모델 옵션 정의
  );

  return model;
};

module.exports = Visitor;
