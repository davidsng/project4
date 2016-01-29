module.exports = {
  entry: "./app/assets/javascripts/main.jsx",
  output: {
    path: __dirname + "/app/assets/javascripts",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader',
        query: { cacheDirectory: true, presets: ['react', 'es2015', 'stage-0'] }
      }
  ]
}
};
