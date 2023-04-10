-- [공통]
-- 데이터베이스 목록 보기
SHOW databases;

-- 데이터베이스 선택
USE codingon;

-- [DDL]
-- 테이블 생성
DROP TABLE visitor;
CREATE TABLE visitor (
  id INT NOT NULL PRIMARY KEY auto_increment,
  name VARCHAR(10) NOT NULL,
  comment MEDIUMTEXT
);

-- 테이블 구조 확인
DESC visitor;

-- [DML]
-- 테이블 데이터 조회 (Read)
SELECT * FROM visitor;

-- 테이블 데이터 추가 (Cerate)
INSERT INTO visitor (name, comment) VALUES("홍길동", "내가 왔다.");
INSERT INTO visitor (name, comment) VALUES("이찬혁", "으라차차");
INSERT INTO visitor (name, comment) VALUES("성춘향", "안뇽");

-- 생성된 계정 정보 확인
SELECT * FROM mysql.user;
-- 사용자 추가 
CREATE USER 'user'@'%' IDENTIFIED BY '1234';
-- user 계정 권한 부여
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용중인 mysql 캐시 지우고 새로 적용
FLUSH PRIVILEGES;






