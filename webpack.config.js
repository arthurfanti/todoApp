module.exports = {
  entry: './app/App.js',
  output: {
    path: '/public',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './public',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}
