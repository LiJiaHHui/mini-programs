const query = require('../utils/query');

const tables = {
  category:`create table if not exists category(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  count int(111) DEFAULT '0' ,
  image_url varchar(255) DEFAULT NULL,
  level int(111) DEFAULT '0' ,
  name varchar(20) DEFAULT NULL,
  parent_id int(11) DEFAULT NULL
)`,
users:`create table if not exists users(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  phone CHAR(11) NOT NULL,
  password VARCHAR(20) NOT NULL,
  avator VARCHAR(255) DEFAULT 'default.jpg',
  credit INT NOT NULL DEFAULT 0 ,
  useCredit INT NOT NULL DEFAULT 0 ,
  cash INT NOT NULL DEFAULT 0 ,
  isReal TINYINT NOT NULL DEFAULT 0
 );`,//用户表
}
const createTable = function(tb){
  query(tb,function(res){
    console.log('建表成功');
    return true;
  },function(err){
    console.log('建表失败',err);
    return false;
  })
}
 
for (let key in tables) {
  if (tables.hasOwnProperty(key)) {
    createTable(tables[key]);
  }
}