// cfr. https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname, '..');

module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['env', 'react'],
            plugins: [
              'react-hot-loader/babel',
              'transform-object-rest-spread',
              'transform-class-properties',
              'transform-export-default',
            ],
          },
        },
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: '#inline-source-map',
  devServer: {
    //colors: true,
    historyApiFallback: true,
    //inline: true, // instead than on the CL
    hot: true, // instead than on the CL
    contentBase: './public',
    //outputPath: path.resolve(ROOT_PATH, 'dist'),
  },
  resolve: {
    alias: {},
    modules: [],
  },
};
