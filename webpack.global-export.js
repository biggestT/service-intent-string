const path = require('path');
const webpack = require('webpack');

const config = {

  entry: './src/index.js',

  output: {
    filename: 'sis.min.js',
    library: 'ServiceIntentString',
    libraryTarget: 'var'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [ 'babel-loader' ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.js$/,
      compressor: { warnings: false },
      sourceMap: true,
      compress: { drop_console: true },
      minimize: true
    })
  ]
};

module.exports = config;

