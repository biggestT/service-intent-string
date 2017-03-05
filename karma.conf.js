module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/test.js'
    ],
    preprocessors: {
      'src/test.js': ['webpack', 'sourcemap']
    },
    webpack: require('./webpack.config.js'),
    reporters: ['progress'],
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
