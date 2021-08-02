const path = require('path');
const Paths = {
  ENTRY: './src/main.js',
  OUTPUT: 'bundle.js',
};

module.exports = {
  entry: Paths.ENTRY,
  output: {
    filename: Paths.OUTPUT,
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
  }
}
