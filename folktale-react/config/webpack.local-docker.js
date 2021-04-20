const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mapStyle = process.env.MAP_STYLE === 'true';

module.exports = env => {

  const { NPC_ENV } = env;
  const GLOBAL_CONSTANTS = require(`./constants/${NPC_ENV}.js`);

  return merge(common(env), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      disableHostCheck: true,
      host: '0.0.0.0',
      port: 4200,
      historyApiFallback: true,
      overlay: true,
      open: true,
      stats: 'errors-only',
      proxy: { // forward to fe-service
        '/api': {
          target: GLOBAL_CONSTANTS.WEBPACK_PROXY_TARGET,
          changeOrigin: true,
          secure: false,
          pathRewrite: { '^/api' : '' },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: mapStyle
              ? 'css-loader?sourceMap'
              : 'css-loader' },
          ],
        },
        {
          test: /\.s(a|c)ss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
  });
};
