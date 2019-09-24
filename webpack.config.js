const path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(png|svg|jpg|gif|pdf)$/,
      use: [
      'file-loader'
      ]
    },
    {
      test:/\.css$/,
      use:['style-loader','css-loader']
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './server/public'
  }
}

