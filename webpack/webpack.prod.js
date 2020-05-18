/* eslint-disable */
/*tslint:disabled*/
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
// const {GenerateSW} = require('workbox-webpack-plugin');
const path = require('path');

const CONTEXT = path.resolve(__dirname, '../');

module.exports = merge(common, {
  mode: 'production',
  module: { },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
      algorithm: 'gzip',
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
    minimize: true,
    minimizer: [
      // new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({
        terserOptions: {
          ecma: 11,
          warnings: false,
          parse: {
            ecma: 11
          },
          compress: {
            ecma: 6,
            warnings: false,
            comparisons: false,
            inline: 2
          },
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          output: {
            ecma: 6, 
            comments: false, 
            ascii_only: true, 
          },
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
          parallel: true,
          toplevel: false,
          cache: true,
          cacheKeys: (defaultCacheKeys, file) => {
            defaultCacheKeys.myCacheKey = 'myCacheKeyValue';
            return defaultCacheKeys;
          },
          sourceMap: false,
          extractComments: false,
          // mangle: { safari10: true, },
        },
      }), 

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
