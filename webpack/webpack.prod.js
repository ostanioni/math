/* eslint-disable */
/*tslint:disabled*/
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const safePostCssParser = require('postcss-safe-parser');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const {GenerateSW} = require('workbox-webpack-plugin');
const path = require('path');

const $SOURCE_MAP = false
const CONTEXT = path.resolve(__dirname, '../');

/***___SCSS_LOADER_WITHOUT_SOURCE_MAP__ ***/
const SCSS = {
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    { loader: 'css-loader',     options: { sourceMap: $SOURCE_MAP, importLoaders: 2, } },
    'postcss-loader',
    { loader: 'sass-loader',    options: { sourceMap: $SOURCE_MAP, importLoaders: 0, }, }
  ],
  sideEffects: true,
}

/***___CSS_LOADER_WITHOUT_SOURCE_MAP___***/
const CSS = {
  test: /\.css$/,
  use: [
     MiniCssExtractPlugin.loader,
    { loader: 'css-loader', options: { sourceMap: $SOURCE_MAP, importLoaders: 1, } },
    'postcss-loader'
  ],
  sideEffects: true,
}

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [ SCSS, CSS ]
  },
  plugins: [
    new TerserPlugin({
      terserOptions: {
        parse: {
         ecma: 8,
        },
        compress: {
          ecma: 5,
          warnings: false,
          comparisons: false,
          inline: 2,
        },
        mangle: {
          safari10: true,
        },
        output: {
          ecma: 5,
          comments: false,
          ascii_only: true,
        },
      },
      parallel: true,
      cache: true,
      sourceMap: $SOURCE_MAP,
    }),
    new MiniCssExtractPlugin({
        cssProcessorOptions: {
          parser: safePostCssParser,
          map: $SOURCE_MAP,
        },
        filename: 'css/[contenthash].css',
        chunkFilename: 'css/[contenthash].[id].css',
    }),
    new CompressionPlugin({
      algorithm: 'gzip'
    }),
    // GenerateSW({
    //   clientsClaim: true,
    //   exclude: [/\.map$/, /asset-manifest\.json$/],
    //   importWorkboxFrom: 'cdn',
    //   navigateFallback: publicUrl + '/index.html',
    //   navigateFallbackBlacklist: [
    //     // Exclude URLs starting with /_, as they're likely an API call
    //     new RegExp('^/_'),
    //     // Exclude URLs containing a dot, as they're likely a resource in
    //     // public/ and not a SPA route
    //     new RegExp('/[^/]+\\.[^/]+$'),
    //   ],
    // }),
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: 'all', // 'async'
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: true,
  }
});
