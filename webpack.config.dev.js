var webpackMerge = require('webpack-merge');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: './public/js/app',
    publicPath: "/js/app/",
    filename: 'bundle.js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new DefinePlugin({
      'API': JSON.stringify('http://localhost:8000/api/')
    })
  ]
});