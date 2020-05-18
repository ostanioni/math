// /* eslint-disable */
// /*tslint:disabled*/
// const postcssNormalize = require('postcss-normalize');
const devMode = process.env.NODE_ENV !== 'production'
let $SOURCEMAP = devMode ? true : false
  
module.exports = {
  sourceMap: $SOURCEMAP,
  // importLoaders: 1,
  // postcssNormalize(),
  ident: 'postcss',
  plugins: [
    require('postcss-import')(),
    require('postcss-flexbugs-fixes')(),
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
