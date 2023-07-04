const common = require('./webpack.common.config.js');
const {merge} = require('webpack-merge');

const config = {
  mode: 'development',
};

module.exports = merge(common, config);