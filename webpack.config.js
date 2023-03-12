const GLOBAL_SASS_REGEXP = /\.global\.sass$/;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/pages/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: './',
    // contentBase: path.resolve(__dirname, './'),
    open: true,
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ],
        exclude: GLOBAL_SASS_REGEXP
      },
      {
        test: GLOBAL_SASS_REGEXP,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
};
