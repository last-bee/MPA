'use strict'

const path = require('path');
const webpack = require('webpack')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const setMPA = () => {
  const entry = {}
  const htmlWebpackPlugins = []
  const entryFiles = glob.sync(path.join(__dirname, '../src/pages/*/index.js'));
  console.log(entryFiles)
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
          filename: `${pageName}/index.html`,
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
module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name]/index.js'
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
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
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
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    new VueLoaderPlugin()
  ].concat(htmlWebpackPlugins),
}