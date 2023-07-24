// vue.config.js
module.exports = {
    devServer: {
      proxy: {
        '/login': {
          target: 'http://54.80.111.38:8005/api.login', 
          changeOrigin: true,
          secure: false,
          pathRewrite: {
            '^/api': '', 
          },
        },
      },
    },
  };
  