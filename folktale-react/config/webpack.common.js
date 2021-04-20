// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = env => {

  // eslint-disable-next-line no-console
  console.log('NPC_ENV: ', env.NPC_ENV);

  const { NPC_ENV } = env;

  const GLOBAL_CONSTANTS = require(`./constants/${NPC_ENV}.js`);
  GLOBAL_CONSTANTS.NPC_ENV = NPC_ENV;

  const plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public', 'index.html'),
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
    }),
    // new CopyWebpackPlugin([{
    //   from: path.resolve(__dirname, '../src/assets/public'),
    //   to: path.resolve(__dirname, '../dist/images'),
    // }]),
    // new webpack.DefinePlugin({
    //   ENV: JSON.stringify(GLOBAL_CONSTANTS),
    // }),
  ];

  return {
    entry: {
      main: path.resolve(__dirname, '../src', 'index.js'),
    },
    output: {
      filename: '[name].[fullhash].js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: `${GLOBAL_CONSTANTS.RESOURCE_ROOT_URL}/`,
    },
    module: {
      rules: [
        {
          test: /\.worker\.js$/,
          use: {
            loader: 'worker-loader',
            options: { inline: true },
          },
        },
        {
          test: /\.(js|jsx)$/,
          exclude: [/node_modules/],
          use: [{ loader: 'babel-loader' }],
        },
        {
          test: /.*\.(gif|png|jp(e*)g|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 21000,
                name: 'images/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          exclude: /node_modules/,
          use: ['file-loader'],
        },
      ],
    },
    plugins,
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@src': path.resolve(__dirname, '../src'),
      },
    },
  };
};
