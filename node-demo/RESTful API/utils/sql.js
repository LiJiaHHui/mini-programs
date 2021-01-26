const query = require('./query')
// const Tools = require('./tools')
const mysql = require('mysql')
const config = require('../config').database
const pool = mysql.createPool(config)
const getForeignInfo = function(tb,filter,foreign){//主表，筛选条件,外键信息
  let queryStr = '';//查询条件
  for (let key in filter) {
    queryStr += `${tb}.${key}=${filter[key]}&`;
  }
  queryStr = queryStr.substr(0,queryStr.length-1);
  let as = '';
  let join = '';
  let tables = ` from ${tb} ${tb}`;
  for (let key1 in foreign) {
    let table = foreign[key1].table;
    let data = foreign[key1].data;
    let key = key1;
    join += ` join ${table} ${table} on ${tb}.${key}=${table}.id `;
    for(let key2 in data){
      as += `,${table}.${key2} as ${data[key2]}`
    }
  }
  let str = `select ${tb}.*`+as+tables+join+(queryStr==''?'':'where '+queryStr);
  console.log(str);
  return str;
}
const Sql={
  queryAll:function(tb,filter,foreign){  //获取表的全部记录
    //全部
      return new Promise((resolve,reject)=>{
        let str = `select * from ${tb}`;
        if (foreign) {
          str = getForeignInfo(tb,filter,foreign);
        }
        query(str,function(res){
          let data = {
            code:200,
            message:'获取成功',
            data:{
              list:res,
              size:res.length
            }
          }
          resolve(data);
        },function(err){
          resolve(err);
        })
      })
  },
  query:function(tb,id,foreign){ //根据id获取
    return new Promise((resolve,reject)=>{
      query(`select * from ${tb} where id=${id}`,function(res){
        let data = {
          code:200,
          message:res.length==0?'查无数据':'获取成功',
          data:res.length==0?{}:res[0]
        }
        resolve(data);
      },function(err){
        resolve(err);
      })
    })
  },
  insert:function(tb,data){  //插入一条记录
    return new Promise((resolve,reject)=>{
      let [keys,values] = [[],[]];
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          keys.push(key);
          if (Object.prototype.toString.call(data[key]) == '[object String]') {
            values.push(`"${data[key]}"`)
          }else {
            values.push(data[key])
          }
        }
      }
      query(`insert into ${tb} (${keys}) values (${values})`,function(res){
        let id = res.insertId;
        let data = {
          code:200,
          message:'添加成功',
          data:res
        }
        query(`select * from ${tb} where id=${id}`,function(res){
          data.data = res[0];
          resolve(data);
        },function(err){
          resolve(data);
        })
      },function(err){
        resolve(err);
      })
    })
  }
}

module.exports = Sql;