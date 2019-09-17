var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


const PUBLIC_PATH = path.resolve( __dirname, "./src" );

module.exports = {
  mode:'development',
  entry: './index.js',

  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js',
    // publicPath: '/',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  module: {
    rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env",
            "@babel/preset-react"
          ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],




  },

  

  devServer: {
    // contentBase: [path.join(__dirname, '../dist')],
    compress: true,
    // port: 9000,
    historyApiFallback: true,
  
    writeToDisk: true,
   
  },

  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html"
  })]
};
