const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
// presets: [
  //   [
  //     '@babel/preset-env', 
  //     {
  //       targets: {
  //         chrome: "67",
  //       },
  //       useBuiltIns: 'usage',
  //       corejs: 3
  //     },
  //   ]
  // ]
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', 
  entry: {
    main: './src/index.js'
  },
  devServer: {
    contentBase: './dist',
    open: true,
    port: 3000,
    hot: true,
    hotOnly: true
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
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template:'./index.html'}),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
}