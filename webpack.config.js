module.exports = {
  entry: "./client/src/app.jsx",
  output: {
    path: __dirname + "/client/build",
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx-loader", exclude: './node_modules' }
    ]
  }
}