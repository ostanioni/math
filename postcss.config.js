// /* eslint-disable */
// /*tslint:disabled*/
// const postcssNormalize = require('postcss-normalize');
const devMode = process.env.NODE_ENV !== 'production'
let $SOURCEMAP = devMode ? true : false
  
module.exports = {
  sourceMap: $SOURCEMAP,
  // importLoaders: 1,
  // postcssNormalize(),
  parser: 'postcss-scss',
  syntax: 'postcss-scss',
  ident: 'postcss',
  plugins: [
    require('postcss-import')(),
    require('postcss-strip-inline-comments')(),
    require('postcss-flexbugs-fixes')(),
    require('autoprefixer')(),
    require('postcss-preset-env')({
      stage: 3,
      autoprefixer: { flexbox: 'no-2009', grid: true, },
      features: {
      'nesting-rules': true,
      'color-mod-function': { unresolved: 'warn', }
      }
    }),
    // require('cssnano')( {"preset": ["advanced", { "discardComments": {"removeAll": true,} }], } ),
  ],  
}
/*
"postcss": 
"postcss --no-map --use autoprefixer < css/style$VERSION.css | postcss --no-map --use cssnano > css/style$VERSION.min.css",
"scss": "node-sass scss/style.scss --output-style expanded --indent-type space --indent-size 2 --include-path './node_modules' --source-map-root file://${PWD}/ --source-map-embed true -q > css/style$VERSION.css",
"scss:watch": "onchange 'scss/*.*' -- npm run scss",
"css:build": "npm run scss -s && npm run postcss -s",