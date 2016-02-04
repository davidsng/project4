module.exports = {
  entry: "./app/assets/javascripts/main.jsx",
  output: {
    path: __dirname + "/app/assets/javascripts",
    filename: "bundle.js"
  },
  debug: true,
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'babel-loader',
        query: { cacheDirectory: true, presets: ['react', 'es2015', 'stage-0'] },
        // test: require.resolve('react'), loader: 'expose?React',
      }
  ]
}
};
