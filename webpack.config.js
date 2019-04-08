const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'bundled.js'
  },
  resolve: {
    extensions: ['*', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
}
