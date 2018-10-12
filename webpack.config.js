const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      // JavaScript loader
      // ,
      // CSS/SASS loader
    ]
  },
  optimization: {
    minimizer: [
      // Minimizer plugins
    ]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // General plugins
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
    modules: [
      'node_modules',
      'src',
      'src/components'
    ]
  }
};
