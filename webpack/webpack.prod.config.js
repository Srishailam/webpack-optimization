const common = require('./webpack.common.config.js');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  output: {
    filename: '[name].[contenthash:12].js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
      },
      {
        test: /\.css$/,
        include: /\.module\.css$/,
        use: [ MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          }
        } ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:12].css',
    }),
  ],
};

module.exports = merge(common, config);