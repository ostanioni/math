/* eslint-disable */
/*tslint:disabled*/

const merge   = require('webpack-merge');
const common  = require('./webpack.common.js');
const webpack = require('webpack');
const path    = require('path');

const CONTEXT = path.resolve(__dirname, '../');
const SRC = `${CONTEXT}/src`

/***___SOURCE_MAP____***/
// const JS_SOURCE_MAP = { enforce: "pre", test: /\.js$/, loader: "source-map-loader" };
const JS_SOURCE_MAP = {
  enforce: 'pre',
  test: /\.js$/,
      loader: "source-map-loader"
}
/***___SCSS_SYNTAX___ ***/
const SCSS_SYNTAX = {
  enforce: "pre",
  test: /\.s[ac]ss$/,
  exclude: /node_modules/,
  use: [
    { loader: 'postcss-loader',
      options: { 
        parser: 'postcss-scss', 
        syntax: 'postcss-scss',
      } 
    },
  ]
};





module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
    host: '127.0.0.7',
    port: 3001
  },
  devtool: 'cheap-module-source-map', // 'source-map',
  module: {
    rules: [ JS_SOURCE_MAP, SCSS_SYNTAX, CSS_SOURCE_MAP ]
  },
  optimization: {
    minimize: false,
    usedExports: true
  }
});

/*
======================================================================
require('autoprefixer')({...options}),
require('stylelint')({"extends": "stylelint-config-recommended"}),
======================================================================
*/