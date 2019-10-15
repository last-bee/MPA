'use strict'
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackBaseConfig = require('./webpack.base')



const webpackProdConfig = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
  ],
  stats: 'errors-only'
}

module.exports = merge(webpackBaseConfig, webpackProdConfig)