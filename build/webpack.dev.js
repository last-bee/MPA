'use strict'

const path = require('path');
const webpack = require('webpack')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const setMPA = () => {
  const entry = {}
  const htmlWebpackPlugins = []
  const entryFiles = glob.sync(path.join(__dirname, '../src/pages/*/index.js'));
  Object.keys(entryFiles)
    .map(index => {
      const entryFile = entryFiles[index]
      const match = entryFile.match(/src\/pages\/(.*)\/index\.js/)
      const pageName = match && match[1]
      entry[pageName] = entryFile
      htmlWebpackPlugins.push(
        new HtmlWebpackPlugin({
          inlineSource: '.css$',
          template: path.join(__dirname, `../src/pages/${pageName}/index.html`),
          filename: `${pageName}.html`,
          chunks: ['vendors', pageName],
          inject: true,
          minify: {
            html5: true,
            collapseWhitespace: true,
            preserveLineBreaks: false,
            minifyCSS: true,
            minifyJS: true,
            removeComments: false
          }
        })
      )
    })
  return {
    entry,
    htmlWebpackPlugins
  }
}
const { entry, htmlWebpackPlugins } = setMPA();
console.log(entry, htmlWebpackPlugins)
module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', 'vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    }
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ].concat(htmlWebpackPlugins),
  devServer: {
    // contentBase: '../dist',
    hot: true,
  },
  devtool: 'source-map'
}