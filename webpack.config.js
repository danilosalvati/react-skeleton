const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
  inject: 'body'
})

module.exports = env => ({
  entry: './src/',
  mode: env.production ? 'production': 'development',
  output: {
    path: path.resolve('build'),
    filename: '[name].[contenthash].js'
  },
  resolve: {
    extensions: ['*', '.webpack.js', '.web.js', '.js', '.jsx', '.json', '.ts', '.tsx']
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
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  devServer: {
    port: 8080,
    inline: true,
  },
})
