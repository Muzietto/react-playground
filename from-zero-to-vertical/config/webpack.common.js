const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {

  const { NPC_ENV } = env;
  const NODE_CONSTANTS = require(`./constants/${NPC_ENV}.js`);

  // eslint-disable-next-line no-console
  console.log('NPC_ENV: ', env.NPC_ENV);

  //  const { NPC_ENV } = env;

  const plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public', 'index.html'),
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify(NODE_CONSTANTS),
    }),
  ];

  return {
    entry: {
      main: path.resolve(__dirname, '../src', 'index.js'),
    },
    output: {
      filename: '[name].[fullhash].js',
      path: path.resolve(__dirname, '../dist'),
    },
    module: {
      rules: [
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
