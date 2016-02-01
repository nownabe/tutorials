module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./public/js",
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
}
