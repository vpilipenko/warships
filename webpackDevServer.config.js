var path = require('path');

module.exports = {
  hot: true,
  contentBase: path.join(__dirname, 'dist'),
  compress: true,
  port: 9000,
  open: 'Google Chrome',
  clientLogLevel: 'silent'
};