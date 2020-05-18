/* eslint-disable */ 
/*tslint:disabled*/
//import path from 'path';
// import webpack from 'webpack';
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const safePostCssParser = require('postcss-safe-parser');
const path = require('path');
/*_____________COMMON_VARIABLES_______________ */
const devMode = process.env.NODE_ENV !== 'production'
const $SOURCE_MAP = devMode ? true : false
/*_____________CONTEXT_______________ */
const CONTEXT = path.resolve(__dirname, '../');
const ASSET_PATH = process.env.ASSET_PATH || path.resolve(CONTEXT, 'dist');;
/* __________ENTRY__POINT_____________*/
const $ENTRY = './src/index.ts'

/*****************************__COMMON_LOADERS__*****************************************/
/***___TS_LOADER___***/
const TS = { test: /\.ts$/, loader: "ts-loader", exclude: [path.resolve(CONTEXT, 'node_modules')] };
/***___BABEL_LOADER___ ***/
const BABEL = { 
  test: /\.js$/, 
  exclude: [path.resolve(CONTEXT, 'node_modules')], 
  loader: 'babel-loader',
};
/***___TSX_LOADER___***/
// const TSX = { test: /\.tsx$/, loader: "awesome-typescript-loader" };
/***___IMAGES_LOADER___***/
const IMAGES = { test: /\.(png|svg|jpg|gif)$/,  use: [ { loader: 'file-loader', /*exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],*/ options: { name(file) { if (process.env.NODE_ENV === 'development') { return 'imgs/[path][name].[ext]'; } return 'imgs/[hash].[ext]';},},},]};
/***___WORKER_LOADER___***/
// const WORKER_LOADER = { test: /\.worker\.js$/,  use: { loader: 'worker-loader' } };
/***__FONT_LOADER___***/
const FONT = { test: /\.(woff|woff2|eot|ttf|otf)$/, use: [ 'file-loader' ] };
/***__XML_LOADER___***/
// const XML = { test: /\.xml$/, use: [ 'xml-loader'  ] };
/***__CSV_LOADER___***/
// const CSV = { test: /\.(csv|tsv)$/, use: [ 'csv-loader' ] };
/***__MD_LOADER___***/
const MD = { test: /\.md$/, use: [{ loader: "raw-loader" }, { loader: "markdown-loader", options: { } }] };
// const MD = { test: /\.md$/, use: [{ loader: "html-loader" }, { loader: "markdown-loader", options: { } }] };
/***__RAW_LOADER___***/
// const RAW = { test: /\.txt$/i, use: 'raw-loader'};
/***__HTML_LOADER___***/
// const HTML = { test: /\.(html)$/, use: { loader: 'html-loader', options: { attrs: [':data-src'] } }};
/***__ESLINT_LOADER___***/
// const ESLINT = { test: /\.(js|mjs|jsx)$/, enforce: 'pre', use: [ { options: { formatter: require.resolve('react-dev-utils/eslintFormatter'), eslintPath: require.resolve('eslint'), }, loader: require.resolve('eslint-loader'), }, ] }; //, include: paths.appSrc };

/***___SCSS_SYNTAX___ ***/
const SCSS_SYNTAX = {
  enforce: "pre",
  test: /\.s[ac]ss$/i,
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
/***___SCSS_CSS_PARAMETERS__ ***/
const $STYLE_LOADER = { 
  loader: 'style-loader', 
  options: { injectType: 'styleTag' } // styleTag singletonStyleTag lazyStyleTag lazySingletonStyleTag linkTag
}
const $MINI_CSS_LOADER = { 
  loader: MiniCssExtractPlugin.loader, 
  options: {
    publicPath: './css',
    assetPath: ASSET_PATH + '/css',
    hmr: devMode,
    reloadAll: true,
  } 
}
const $STYLE_LOADER_OR_MINI_CSS_LOADER = devMode ? $STYLE_LOADER : $MINI_CSS_LOADER;
/***___SCSS_CSS___ ***/
const SCSS_CSS = {
  test: /\.((c|sa|sc)ss)$/i,
  use: [
    $STYLE_LOADER_OR_MINI_CSS_LOADER,
    { 
      // Run `postcss-loader` on each CSS `@import`, do not forget that `sass-loader` compile non CSS `@import`'s into a single file
      // If you need run `sass-loader` and `postcss-loader` on each CSS `@import` please set it to `2`
      loader: 'css-loader', 
      options: { 
        sourceMap: $SOURCE_MAP, 
        importLoaders: 2,
      } 
    },
    'postcss-loader',
    { 
      loader: 'sass-loader',    
        options: { 
          sourceMap: $SOURCE_MAP,
          implementation: require('sass'), 
          // importLoaders: 0,
          sassOptions:{
            indentWidth: 2,
            fiber: require('fibers'),
          }
        } 
    },
  ],
  sideEffects: true,
}

module.exports = {
  context: CONTEXT,
  entry: {
   app: $ENTRY
  },
  output: {
    filename: '[hash].js',
    path: `${CONTEXT}/dist/js`,
    publicPath: './js',
  },
  resolve: {
    extensions: [ 'ts', '.js', '.json' ],
    alias: {
      pages:      `${CONTEXT}/src/pages`,
      layouts:    `${CONTEXT}/src/layouts`,
      components: `${CONTEXT}/src/components`,
      resources:  `${CONTEXT}/src/resources`,
      tables:     `${CONTEXT}/src/tables`,
      stores:     `${CONTEXT}/src/stores`,
      ts:         `${CONTEXT}/src/typescript`,
      algs:       `${CONTEXT}/src/typescript/algorithms`,
      webgl:      `${CONTEXT}/src/webgl`,
      polyfills:  `${CONTEXT}/src/polyfills`,
      resources:  `${CONTEXT}/public/resources`,
      workers:    `${CONTEXT}/public/workers`,
      css:        `${CONTEXT}/public/css`,
      imgs:       `${CONTEXT}/public/imgs`,
      themes:     `${CONTEXT}/src/themes`,
    },
  },
  module: {
    rules: [ TS, BABEL, FONT, IMAGES, MD, SCSS_CSS]
  },
  plugins: [
    new MiniCssExtractPlugin({
      cssProcessorOptions: {
        parser: safePostCssParser,
        map: $SOURCE_MAP,
      },
      filename: `${CONTEXT}/css/[contenthash].css`, // [name]
      chunkFilename: `${CONTEXT}/css/[contenthash].[id].css`,
    }),
    new HtmlPlugin({
      inject: true,
      template: `${CONTEXT}/public/index.html`,
      filename: `${CONTEXT}/dist/index.html`,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        // minifyJS: true,
        // minifyCSS: true,
        // minifyURLs: true,
      }
    }),
    new CopyPlugin({
      patterns:[
        { 
          from: 'public/imgs',
          to: '../imgs',  
          // [name].[ext]',
          toType: 'dir',
          force: false,
          // context: `${CONTEXT}`
        },
        { 
          from: 'public/workers',
          to: '../workers',  
          // [name].[ext]',
          toType: 'dir',
          force: false,
          context: `${CONTEXT}`
        },
        { 
          from: 'public/resources',
          to: '../resources',  
          // [name].[ext]',
          toType: 'dir',
          force: false,
          context: `${CONTEXT}`
        },
        { 
          from: 'public/js',
          to: '../js',  
          // [name].[ext]',
          toType: 'dir',
          force: false,
          context: `${CONTEXT}`
        },
        { 
          from: 'public/css',
          to: '../css',  
          // [name].[ext]',
          toType: 'dir',
          force: false,
          context: `${CONTEXT}`
        },
      ],
      options: {
        concurrency: 100,
      }
    })
  ]
};