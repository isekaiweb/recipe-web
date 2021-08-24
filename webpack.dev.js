const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. Inject styles into DOM
          'css-loader', // 2. Turns css into commonjs
          'sass-loader' // 1. Turns sass into css
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    assetModuleFilename: 'images/[name][ext]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html',
    })
  ]
})
