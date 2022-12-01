// webpack.config.js
const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'production',
  //  devtool: 'inline-source-map',
  devtool: false,
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'hedera-bundle.js' // <--- Will be compiled to this single file
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
      http2: 'http2'
    })
  ],
  resolve: {
    extensions: ['.js'],
    fallback: {
      os: require.resolve('os-browserify/browser'),
      url: require.resolve('url/'),
      util: require.resolve('util/'),
      dns: false,
      fs: false,
      tls: false,
      net: false,
      path: false,
      process: require.resolve('process'),
      zlib: false,
      http: false,
      https: false,
      crypto: false,
      'crypto-browserify': false,
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer'),
      http2: false
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  }
}
