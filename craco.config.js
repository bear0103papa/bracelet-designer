module.exports = {
    webpack: {
      configure: {
        optimization: {
          splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 244000,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30
          }
        }
      }
    }
  }