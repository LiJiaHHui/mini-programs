let key = 'QJHBZ-4OARS-2PHOE-6UNNV-FELFJ-WSF7V';  //使用在腾讯位置服务申请的key
let referer = 'plugin';   //调用插件的app的名称
let endPoint = JSON.stringify({  //终点
  'name': '湖南省博',
  'latitude': 28.217823,
  'longitude': 112.999939
});
wx.navigateTo({
  url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
});
Page({
  data: {
  
  },
});