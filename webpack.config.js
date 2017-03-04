const path = require('path');
const webpack = require('webpack');

const config = {
  context: path.resolve(__dirname + '/src'),
  entry: './index.js',

  output: {
    filename: 'index.js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [ 'babel-loader' ]
    }]
  }
};

module.exports = config;

