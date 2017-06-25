const path = require('path');
const webpack = require('webpack');

const context = path.resolve(__dirname + '/src');
const entry = './index.js';
const moduleConf = {
  rules: [{
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: [ 'babel-loader' ]
  }]
};

const configLegacy = {
  context,
  entry,
  module: moduleConf,
  output: {
    filename: 'sis.min.js',
    library: 'ServiceIntentString',
    libraryTarget: 'var'
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

const config = {
  context,
  entry,
  module: moduleConf,
  output: {
    filename: 'sis.js',
    library: 'service-intent-string',
    libraryTarget: 'commonjs'
  }
};

module.exports = [
  config,
  configLegacy
];

