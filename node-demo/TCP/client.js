var net = require('net')
var client = net.connect({port:8888},function(){
  console.log('客户端连接')
  client.write("wwwweekend!")
})
client.on('data',function(data){
  console.log(data.toString())
  client.end()
})
client.on('end',function(){
  console.log('客户端断开连接')
})