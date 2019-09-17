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
      '/api/json1': {
        bypass: (req, res) => {
          console.log('\n########>>> DATA1 <<<########\n', new Date().toString());
          res.send({
            name: 'Muzietto',
            surname: 'Falpalà',
          });
        },
      },
      '/api/json2': {
        bypass: (req, res) => {
          console.log('\n########>>> DATA2 <<<########\n', new Date().toString());
          res.send({
            name: 'Arancia',
            surname: 'Meccanica',
          });
        },
      },
      '/api/json3': {
        bypass: (req, res) => {
          console.log('\n########>>> DATA3 <<<########\n', new Date().toString());
          res.send({
            name: 'Ocean\'s',
            surname: 'Eleven',
          });
        },
      },
    },
  },
});
