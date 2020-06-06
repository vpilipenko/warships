const path = require('path');

const devServerConfig = require('./webpackDevServer.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.tsx',
  output: {
     path: path.join(__dirname, '/dist'),
     filename: 'bundle.min.js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devServer: {...devServerConfig},
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      },
      { 
        test: /\.(ts|tsx)$/, 
        loader: 'ts-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.(styl)$/,
        use: [
          process.env.NODE_ENV === 'development' && {
            loader: 'style-loader'
          },
          process.env.NODE_ENV === 'production' && MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              url: true,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          },
          {
            loader: 'stylus-loader?resolve url'
          },
        ].filter(f => f)
      },
      {
        test: /\.(css)$/,
        use: [
          process.env.NODE_ENV === 'development' && {
            loader: 'style-loader'
          },
          process.env.NODE_ENV === 'production' && MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              url: true,
            }
          },
        ].filter(f => f)
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}