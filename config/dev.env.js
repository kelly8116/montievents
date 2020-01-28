'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FB_ACCESS_TOKEN: '"2209799002607600|fc5789f70e6e006141b05babb171a25b"'
})
