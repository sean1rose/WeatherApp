module.exports = {
  entry: [
    './src/index.js',
    'webpack/hot/dev-server'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.(js|jsx)/,
      exclude: /node_modules/,
      loader: "react-hot"
    },
    {
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
