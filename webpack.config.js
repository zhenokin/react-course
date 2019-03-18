var path = require('path');
var hwp = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"]
      },
    module:{
        rules:[
            {
            test: /\.jsx?$/,
            exclude: /node-modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader"})
        }
    ]
    },
    plugins:[
        new hwp({template:path.join(__dirname, '/src/index.html')}),
        new ExtractTextPlugin("[name].css")
    ]
}