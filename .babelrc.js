const RUNTIME =  [
  "@babel/plugin-transform-runtime",
  {
    "corejs": false,
    "helpers": true,
    "regenerator": true,
    "useESModules": false
  }
]

const DECORATOR = ["@babel/plugin-proposal-decorators", { "legacy": true }]
const PROPOSAL = ["@babel/plugin-proposal-class-properties", { "loose" : true }]
module.exports = {
  "presets": [ "@babel/preset-env"],
  "plugins": [ DECORATOR, PROPOSAL, RUNTIME ],
  env: {
    production: {
      only: ['app'],
      plugins: [ 'lodash'],
    },
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        'dynamic-import-node',
      ],
    },
  }
}
 