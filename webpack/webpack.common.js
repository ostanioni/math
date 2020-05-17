/* eslint-disable */ 
/*tslint:disabled*/
/*****************************__COMMON_LOADERS__*****************************************/
/***___BABEL_LOADER___ ***/
const BABEL = { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" };
/***___TSX_LOADER___***/
// const TSX = { test: /\.tsx$/, loader: "awesome-typescript-loader" };
/***___TS_LOADER___***/
const TS = { test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/ };
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
const RAW = { test: /\.txt$/i, use: 'raw-loader'};
/***__HTML_LOADER___***/
// const HTML = { test: /\.(html)$/, use: { loader: 'html-loader', options: { attrs: [':data-src'] } }};
/***__ESLINT_LOADER___***/
// const ESLINT = { test: /\.(js|mjs|jsx)$/, enforce: 'pre', use: [ { options: { formatter: require.resolve('react-dev-utils/eslintFormatter'), eslintPath: require.resolve('eslint'), }, loader: require.resolve('eslint-loader'), }, ] }; //, include: paths.appSrc };
/**___SVG_SNAP____****/
// SVG_SNAP = {
//   test: require.resolve('snapsvg/dist/snap.svg.js'),
//   use: 'imports-loader?this=>window,fix=>module.exports=0',
// }
  
const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/*_____________CONTEXT_______________ */
const CONTEXT = path.resolve(__dirname, '../');
const ASSET_PATH = process.env.ASSET_PATH || '/';
/* __________ENTRY__POINT_____________*/
const $ENTRY = './src/index.ts'

module.exports = {
  context: CONTEXT,
  entry: {
   app: $ENTRY
  },
  output: {
    filename: '[hash].js',
    path: `${CONTEXT}/dist`,
    publicPath: ASSET_PATH,
  },
  resolve: {
    extensions: [ '.jsx', '.js', '.json','ts' ],
    alias: {
      pages:      `${CONTEXT}/src/pages`,
      layouts:    `${CONTEXT}/src/layouts`,
      components: `${CONTEXT}/src/components`,
      resources:  `${CONTEXT}/src/resources`,
      tables:     `${CONTEXT}/src/tables`,
      stores:     `${CONTEXT}/src/stores`,
      styled:     `${CONTEXT}/src/styled`,
      ts:         `${CONTEXT}/src/typescript`,
      algs:       `${CONTEXT}/src/typescript/algorithms`,
      webgl:      `${CONTEXT}/src/webgl`,
      polyfills:  `${CONTEXT}/src/polyfills`,
      resources:  `${CONTEXT}/public/resources`,
      workers:    `${CONTEXT}/public/workers`,
      css:        `${CONTEXT}/public/css`,
      imgs:       `${CONTEXT}/public/imgs`,
      snapsvg:    'snapsvg/dist/snap.svg.js',
      themes:     `${CONTEXT}/src/themes`,
    },
  },
  module: {
    rules: [ TS, BABEL, FONT, IMAGES, MD, RAW]
  },
  plugins: [
    new HtmlPlugin({
      inject: true,
      template: `${CONTEXT}/public/index.html`,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    }),
    new CopyPlugin({
      patterns:[
        { 
          from: 'public/imgs',
          to: '../dist/imgs',  
          // [name].[ext]',
          toType: 'dir',
          force: true,
          context: `${CONTEXT}`
        },
        { 
          from: 'public/workers',
          to: '../dist/workers',  
          // [name].[ext]',
          toType: 'dir',
          force: true,
          context: `${CONTEXT}`
        },
        { 
          from: 'public/resources',
          to: '../dist/resources',  
          // [name].[ext]',
          toType: 'dir',
          force: true,
          context: `${CONTEXT}`
        },
      ],
      options: {
        concurrency: 100,
      }
    })
  ]
};