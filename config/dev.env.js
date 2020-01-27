'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FB_ACCESS_TOKEN: '"EAAfZAzOyTTZCABAA5c5z4adWhQkDPGL1N7WhH4OTZBpt01GZANafVBSZA9cGojfJ5ChWMA2Iuu46kZC69Dyyx7tedR8bCAcVZB4VEktNoUcSrG52vLOVbZBDZAbRTBpNAcvTt4RnrITkOkFUXwXAvyO4jjRGbK6zguKQsgjoxVau8P1z8NaMr4HBIMeG78hiAHIpPDaAMrg16TgZDZD"'
})
