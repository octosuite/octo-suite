const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  '@shared/components',
  '@shared/redux',
  '@shared/styles'
])

module.exports = withPlugins([withTM], {
  webpack: config =>
    Object.assign(config, {
      target: 'electron-renderer',
      module: {
        ...(config.module || {}),
        rules: [
          ...(config.module.rules || {}),
          {
            test: /\.(js|ts|tsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      }
    })
})
