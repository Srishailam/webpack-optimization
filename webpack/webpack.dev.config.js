const path = require('path');
const common = require('./webpack.common.config.js');
const {merge} = require('webpack-merge');

const config = {
  output: {
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    port: 9000,
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
    },
    client: {
      overlay: true,
    },
    liveReload: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      }
    ],
  },
};

module.exports = merge(common, config);