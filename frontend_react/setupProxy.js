const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target1: 'https://m1kyy2zu.apicdn.sanity.io/v2023-06-01/data/query/production?query=*%5B_type+%3D%3D+%22abouts%22%5D',

      target2: 'https://m1kyy2zu.apicdn.sanity.io/v2023-06-01/data/query/production?query=*%5B_type+%3D%3D+%22works%22%5D',

      changeOrigin: true,
    })
  );
};