'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FB_ACCESS_TOKEN: '"EAAfZAzOyTTZCABAE1GQZBmUaJVm21YVyPkQ8pmj3Gk9W6N0Cz2SmZBkNxKy5OpeY6RZBv66ZAgmzZBwvRpXtzZCjdaXKCFFJ1ZCJiNblZAihDnApzUwu4eghXTgfFwnWZBp7lZAfrqLTNEgzDcNAy8LKaVn3ggTr8K8R3UH1qh12yg6UwENROHBm4cGAAvo0SdGjVUokzkdUwfY5jAZDZD"'
})
