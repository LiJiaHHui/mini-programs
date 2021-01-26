//配置文件：数据库配置/日志配置/服务配置/....
 
const config = {
  port:3000,  // 项目启动端口号
  database:{   // 数据库配置信息
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123456',
    database:'restapi'
  }
}
 
module.exports = config;