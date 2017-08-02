const path = require('path');

module.exports = {
  context: __dirname,
  entry: './lib/type_dance.js',
  output: {
   filename: './lib/bundle.js'
  },
  devtool: 'source-map'
};
