const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 9000,
    proxy: {
      // fetch('/api/json').then(res => res.json()).then(console.log)
      '/api/json': {
        bypass: (req, res) => res.send({
          name: 'Muzietto',
          surname: 'Falpalà',
        })
      },
    },
  },
});
