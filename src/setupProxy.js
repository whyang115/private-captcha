const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/oauth2',
    proxy.createProxyMiddleware({
      target: 'http://api.dev.mingdao.net/',
      changeOrigin: true,
    }),
  );
};
