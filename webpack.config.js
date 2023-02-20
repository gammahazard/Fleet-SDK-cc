const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  experiments: {
    topLevelAwait: true,
    asyncWebAssembly: true
  },
  devtool: 'cheap-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        exclude: /.env/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
   
          },
        },
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'dist/assets' },
        { from: 'src/pages', to: 'dist/pages' },
        { from: 'src/styles', to: 'dist/styles' },
         { from: 'src/js', to: 'dist/js' },
         { from: 'src/index.html', to: 'index.html' }
      ],
    }),
],
};