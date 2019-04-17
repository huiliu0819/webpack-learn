const merge = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', 
  devServer: {
    contentBase: './dist',
    open: true,
    port: 3000,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true
  }
}

module.exports = merge(devConfig, commonConfig)