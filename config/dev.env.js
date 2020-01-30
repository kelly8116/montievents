'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FB_ACCESS_TOKEN: '"EAAfZAzOyTTZCABAN6AyGmAQDZAO2LIBrwDvcGWTe8SZCcgFVbStni1ch84ex2wgZC98w4otG1GECevrbprAcbASfm42yw5uvyulvcnqNLNkHBqiZCB4sZB8ZBTD6HjRP3N6TP05gVXZBZCweq0C1ZCfyLdAIpZAKKfx1n9QZD"'
})
