const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy.createProxyMiddleware({
      target: 'https://apis.map.qq.com/ws/geocoder/v1/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  );
};