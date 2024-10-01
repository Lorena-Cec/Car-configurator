module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.(ttf|eot|woff|woff2)$/,  
        use: {
          loader: 'url-loader',         
          options: {
            limit: 8192,                  
            name: '[name].[ext]',        
            outputPath: 'static/fonts/', 
            publicPath: '/_next/static/fonts/', 
          },
        },
      });
  
      return config;
    },
  };
  