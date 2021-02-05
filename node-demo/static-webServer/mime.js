// 实现添加content-type
const path = require('path');
const mimeTypes={
  "css": "text/css",
  "gif": "image/gif",
  "html": "text/html",
  "ico": "image/x-icon",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
};
const lookup = (pathName) => {
  let ext = path.extname(pathName);//文件拓展名
  ext = ext.split('.').pop();
  return mimeTypes[ext] || mimeTypes['txt']
}
module.exports = {
  lookup
};