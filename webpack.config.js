const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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