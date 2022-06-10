const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/i,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(c|sa)ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                mode: 'pure',
                localIdentName: '[name]__[local]--[hash:base64:8]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
      title: 'Blog',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    port: 8080,
    hot: true,
    open: true,
  },
};
