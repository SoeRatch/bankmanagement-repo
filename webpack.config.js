var webpack = require("webpack");
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
        main: ['babel-polyfill',__dirname +'/src/index.js']
    },
  output: {
    path:__dirname + '/build',
    filename:'app.js',
    publicPath:'/'
  },
  devServer:{
    historyApiFallback: true,
     contentBase: __dirname + "/build/",
     inline: true,
    port: 3000
  },
 
  module: {
    rules: [
         {
            test: /\.css$/,
             use: [
                 {
                   loader: "style-loader"
                 },
                 {
                   loader: "css-loader",
                   options: {
                     modules: true
                   }
                 }
              ]
          },
      {
            test: /\.scss$/,
            use: [
                    {
                      loader: "style-loader" 
                    },
                    {
                      loader: "css-loader"
                    },
                    {
                      loader: "sass-loader"
                    }
                  ]
          },
      
          {
            test:  /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: ["babel-loader"],
            
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
          },
          {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [
              'file-loader',
            ],
          }


    ]
  }

}