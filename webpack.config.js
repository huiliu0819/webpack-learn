const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 204800
        }
      }
    },
    {
     test: /\.scss$/,
     use: [
       'style-loader', 
       {
         loader: 'css-loader',
         options: {
           importLoaders: 2,
           modules: true
         }
       }, 
       'sass-loader', 
       'postcss-loader']
    }
  ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // plugins: [new HtmlWebpackPlugin()]
}