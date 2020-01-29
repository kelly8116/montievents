'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FB_ACCESS_TOKEN: '"2209799002607600|00ba2e9ebe8362bc257e6f67d0b53cee"'
})
