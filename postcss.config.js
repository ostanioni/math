// /* eslint-disable */
// /*tslint:disabled*/
// const postcssNormalize = require('postcss-normalize');
const devMode = process.env.NODE_ENV !== 'production';
// let $SOURCEMAP = devMode ? true : false
const PRESET_ENV_CONFIG = {
  stage: 3,
  autoprefixer: { flexbox: 'no-2009', grid: true },
  features: {
    'nesting-rules': true,
    preserve: false,
    'color-mod-function': { unresolved: 'warn' },
    browsers: 'last 2 versions',
  },
};
const CSSNANO_CONFIG = {
  preset: ['default', { discardComments: { removeAll: true } }],
};

module.exports = devMode
  ? {
      sourceMap: true,
      parser: 'postcss-scss',
      syntax: 'postcss-scss',
      ident: 'postcss',
      plugins: {
        'postcss-import': {},
        'postcss-flexbugs-fixes': {},
        'postcss-preset-env': PRESET_ENV_CONFIG,
      },
    }
  : {
      sourceMap: false,
      // importLoaders: 1,
      // postcssNormalize(),
      parser: 'postcss-scss',
      syntax: 'postcss-scss',
      ident: 'postcss',
      plugins: {
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-flexbugs-fixes': {},
        'postcss-preset-env': PRESET_ENV_CONFIG,
        cssnano: CSSNANO_CONFIG,
      },
    };
// require('cssnano')( {"preset": ["advanced", { "discardComments": {"removeAll": true,} }], } ),
/*
"postcss": 
"postcss --no-map --use autoprefixer < css/style$VERSION.css | postcss --no-map --use cssnano > css/style$VERSION.min.css",
"scss": "node-sass scss/style.scss --output-style expanded --indent-type space --indent-size 2 --include-path './node_modules' --source-map-root file://${PWD}/ --source-map-embed true -q > css/style$VERSION.css",
"scss:watch": "onchange 'scss/*.*' -- npm run scss",
"css:build": "npm run scss -s && npm run postcss -s",
*/
