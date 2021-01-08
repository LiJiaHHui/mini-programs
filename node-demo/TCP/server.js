var net = require('net')
var server = net.createServer(function(scoket){
  scoket.on('data',function(data){
    scoket.write("GOOD SUNSHINE!")
  })
  scoket.on('end',function(){
    console.log("断开啦")
  })
  scoket.write("HAPPY WEEKEND！")
})
server.listen(8888,function(){
  console.log('监听8888端口')
})