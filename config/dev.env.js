'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FB_ACCESS_TOKEN: '"EAAfZAzOyTTZCABAGM64mPxJo8UwlU5ZCNusJV6SXzMu2cls18mwBXPKvJE3RRuLVyVNe3XevScnJAtiTpT2eKFF7fp6l9G2ZCCIWJ1ZBV6ucgVptgZAvW80AaY8jDErvCUWkm1YRbVl8qlKkjywTopdQlMvrmxZAcd4kEyZCkHjKTbQxMdqnGWwHWDykjJ3QoSmftJghskk9ogZDZD"'
})
