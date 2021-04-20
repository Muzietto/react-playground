const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// eslint-disable-next-line no-unused-vars
const mapStyle = process.env.MAP_STYLE === 'true';

module.exports = ENV => {
  // eslint-disable-next-line
  console.log(`---> ENV=${ENV} <-----`);
  const env = { NPC_ENV: 'local' };
  // eslint-disable-next-line
  const GLOBAL_CONSTANTS = require(`./constants/local.js`);

  return merge(common(env), {
    mode: 'development',
    target: 'node',
    devtool: 'inline-source-map',
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new webpack.DefinePlugin({
        expect: require('chai').expect,
      }),
    ],
  });
};
