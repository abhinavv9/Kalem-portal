// vue.config.js
module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://54.80.111.38:8005', 
          changeOrigin: true,
          secure: false,
          pathRewrite: {
            '^/api': '', 
          },
        },
      },
    },
  };
  