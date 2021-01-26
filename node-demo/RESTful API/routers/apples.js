const router = require('koa-router')();   //路由
const Sql = require('../utils/sql');
const tbName = 'category';
 router
  .get('/api/category',async(ctx,next) => {
    let data = await Sql.queryAll(tbName,ctx.request.query);
    ctx.body = data;
  })
  .get('/api/category/:id',async(ctx,next) => {
    let data = await Sql.query(tbName,ctx.params.id);
    ctx.body = data;
  })
 
  .post('/api/category',async(ctx,next) => {
    let data = await Sql.insert(tbName,ctx.request.body);
    ctx.body = data;
  })
  .post('/api/category/rows',async(ctx,next) => {
    let data = await Sql.insertRows(tbName,ctx.request.body);
    ctx.body = data;
  })
 
  .put('/api/category/:id',async(ctx,next) => {
    let data = await Sql.update(tbName,ctx.params.id,ctx.request.body);
    ctx.body = data;
  })
  .put('/api/category',async(ctx,next) => {
    console.log(ctx.request.body);
    let data = await Sql.updateRows(tbName,ctx.request.body);
    ctx.body = data;
  })
 
  .del('/api/category/:id',async(ctx,next) => {
    let data = await Sql.delete(tbName,ctx.params.id);
    ctx.body = data;
  })
  .del('/api/category',async(ctx,next) => {
    let data = await Sql.deleteRows(tbName,ctx.request.body);
    ctx.body = data;
  })
module.exports = router;