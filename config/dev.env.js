'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FB_ACCESS_TOKEN: '"EAAfZAzOyTTZCABANZBO0GQknaphyCjSjpnfDnkB549qULyoVRp2cNrQjEHorbSEGHmgwcMTFFDkMV9S6Ne5d6MZAKIGcPB6ZCFDJpEDrKlOclCw34Jy7FsVbFSKKf4C7aehblxZCvzAQC0ZAM2nJ5jPcNicYzgxu6B7DsdJaknSLV225DUL4ys4y5WI1ZBqYWhTdb2Pjgbdd7AZDZD"'
})
