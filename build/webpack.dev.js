'use strict'
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const webpack = require('webpack')



const webpackDevConfig = {
  mode: 'development',
  devServer: {
    contentBase: '../dist',
    hot: true,
    stats: 'errors-only'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map'
}


module.exports = merge(webpackBaseConfig, webpackDevConfig)