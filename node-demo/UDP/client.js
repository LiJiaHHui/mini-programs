var dgram = require("dgram")
var message = "wwwwweekend"
var client = dgram.createSocket("udp6")
  client.send(message,0,message.length,8888,"localhost",function(
    err,bytes){
      client.close()
    })