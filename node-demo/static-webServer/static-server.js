const fs = require("fs");
const http = require("http");
const path = require("path");
const config = require("./config/default.json");
const mimeTypes=require("./mime")
class StaticServer{
  constructor(){
    this.port=config.port
    this.root=config.root
    this.indexPage=config.indexPage
  }
  start(){//启动~
    http.createServer((req,res)=>{
      // path.normalize 路由变为文件路径\，并合成绝对路径
      // console.log(path.normalize(req.url),req.url)
      const pathName=path.join(this.root,path.normalize(req.url))
      // console.log('=========',pathName)
      // res.routeHandler(req,res)
      // res.writeHead(200)
      // res.end(`Requeste path:${pathName}`)
      this.routeHandler(pathName,req,res)//返回真正的文件
    }).listen(this.port,err=>{//监听配置文件指定的端口
      if(err){
        console.log(err)
        console.info('Failed to start server')
      }else{
        console.info(`Server started on port ${this.port}`)
      }
    })
  }
  respondFile(pathName,req,res){
    const readStream = fs.createReadStream(pathName)
    res.setHeader('Content-Type',mimeTypes.lookup(pathName))//
    readStream.pipe(res)
  }
  respondNotFound(req,res){
    res.writeHead(404, {
      'Content-Type': 'text/html'
  });
    res.end(`<h1>Not Found~</h1>`);
  }
  routeHandler(pathName,req,res){
    fs.stat(pathName,(err, stat) =>{
      if(!err){
        const reqPath = url.parse(req.url).pathName
        this.respondFile(pathName,req,res)
      }else{
        this.respondNotFound(req,res)
      }
    })
    // this.respondFile(pathName,req,res)
  }
}
module.exports = StaticServer