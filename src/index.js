const babel = require('rollup-plugin-babel')
const {terser} = require('rollup-plugin-terser')

module.exports = [
  babel({presets: ['@babel/preset-env']}),
  terser({compress: {unsafe: true}}),
]
