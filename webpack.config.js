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
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-0']
      }
    }]
  }
}
