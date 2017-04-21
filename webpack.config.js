var path = require("path");
var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");

var config = {
  entry: SRC_DIR + "/app/index.js",
  output : {
      path:  SRC_DIR + "/src", 
      filename: "bundle.js",
      publicPath: "/app/"
  },
    module: {
            loaders: [
                {
                    test: /\.js?/,
                    include: SRC_DIR,
                    loader: "babel-loader",
                     query: {
                         presets: ["react","es2015","stage-2"] 
                     }
                }
            ]
    }
}

module.exports = config;
//var path = require('path');
//var webpack = require('webpack');
//var DIST_DIR = path.resolve(__dirname,"dist");
//var SRC_DIR = path.resolve(__dirname,"src");
//
//module.exports = {
//    devServer: {
//        inline: true,
//        contentBase: './src',
//        port: 8080,
//        headers: {
//            'Access-Control-Allow-Origin': '*',
//            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
//        }
//    },
//    devtool: 'cheap-module-eval-source-map',
//    entry: '../app/index.js',
//    module: {
//        loaders: [
//            {
//                test: /\.js$/,
//                loaders: ['babel'],
//                exclude: /node_modules/
//            },
//            {
//                test: /\.scss/,
//                loader: 'style-loader!css-loader!sass-loader'
//            }
//        ]
//    },
//    output: {
//       path: DIST_DIR + "/app",
//        filename: "bundle.js"
//    },
//    plugins: [
//        new webpack.optimize.OccurrenceOrderPlugin(),
//        new webpack.DefinePlugin({
//            'process.env.NODE_ENV': JSON.stringify('development')
//       }),
//        new webpack.optimize.UglifyJsPlugin({
//        compress: {
//        warnings: false
//        }
//        })
//    ]
//};
