// webpack.config.prod.js
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  devtool: 'source-map',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname , 'dist'),
    filename: 'bundle.js',
    publicPath: './'    
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|ttf|eot)([\?]?.*)$/,
        loader: 'file-loader',
        options: {
          name: '/[hash].[ext]',
          limit: 100000,
        },
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          name: '/[hash].[ext]',
          limit: 100000,
        },
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    }
  }
}