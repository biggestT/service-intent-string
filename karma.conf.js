module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/test.js'
    ],
    preprocessors: {
      'src/test.js': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [{
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: [ 'babel-loader' ]
        }]
      }
    },
    reporters: ['progress'],
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
