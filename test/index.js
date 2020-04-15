'use strict'

const plugin = require('../src/index.js')
const rollup = require('rollup')
const tap = require('tap')

rollup.rollup({input: 'test/input.js', plugins: plugin}).then((result)=> {
  result.generate({}).then((output)=> {
    tap.match(output.output[0].code, /function /u, 'It combines scripts')
    tap.match(output.output[0].code, /try\s*\{/u, 'It uses Babel')
    tap.equal(output.output[0].code.split('\n').length, 2, 'It uses Terser')
  })
})
