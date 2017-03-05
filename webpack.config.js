const path = require('path');
const webpack = require('webpack');

const ENV = process.env.npm_lifecycle_event;
const isTest = ENV === 'test' || ENV === 'karma';
console.warn(ENV);
const config = {
  context: path.resolve(__dirname + '/src'),
  entry: './index.js',

  output: {
    filename: 'index.js'
  },

  devtool: isTest ? 'inline-source-map' : '',

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [ 'babel-loader' ]
    }]
  }
};

module.exports = config;

