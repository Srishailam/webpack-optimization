const common = require('./webpack.common.config.js');
const { merge } = require('webpack-merge');

const config = {
  mode: 'production',
};

module.exports = merge(common, config);