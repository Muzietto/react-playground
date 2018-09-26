const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname, '.');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
  mode: 'development',
  //entry: './src/index.js',
  entry: './src/experiments/xxx.js',
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.js$|\.jsx$/,
        include: [ SRC_PATH ],
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
              'transform-runtime',
            ],
          },
        },
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_PATH, 'index.html'),
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: '#inline-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true, // instead than on the CL
    contentBase: './public',
  },
  resolve: {
    modules: [path.join(ROOT_PATH), 'node_modules'],
    alias: {},
  },
};
