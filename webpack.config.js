const path = require('path');

module.exports = {
  context: __dirname,
  entry: './lib/dancer.js',
  output: {
   filename: './lib/bundle.js'
  },
  devtool: 'source-map'
};
