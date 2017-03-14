const path = require('path');

const config = {
  context: path.resolve(__dirname + '/src'),
  entry: './index.js',

  output: {
    filename: 'sis.js',
    library: 'service-intent-string',
    libraryTarget: 'amd'
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

