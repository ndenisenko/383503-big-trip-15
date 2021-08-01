const path = require('path');
const entryPath = './src/main.js';
const outputPath = 'bundle.js';

module.exports = {
  entry: entryPath,
  output: {
    filename: outputPath,
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
  }
}
