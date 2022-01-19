const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app-vanilla.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/
      },
    ]
  },
  devServer: {
    client: {
      overlay: true
    },
    hot: true,
    watchFiles: ['src/*', 'index-vanilla.html']
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: ['index-vanilla.html']
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};