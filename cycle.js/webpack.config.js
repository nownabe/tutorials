module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./js/index.js",
    css: "./css/index.css",
    html: "./index.html"
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: 'file?name=[name].[ext]'},
      {test: /\.html$/, loader: 'file?name=[name].[ext]'}
    ]
  }
}
