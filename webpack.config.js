const path = require("path");
const webpack = require("webpack");
const uglify = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/index.js", //入口文件，src下的index.js
  output: {
    path: path.resolve(__dirname, "./dist"), //输出路径dist目录
    publicPath: "/dist/",  //打包后输出路径      与package.json中main路径对应
    filename: "comment.js", //打包后输出的文件名 与package.json中main文件名对应  main应该为:'dist/comment.js'
    libraryTarget: "umd",//使打包格式支持多种使用场景
    umdNamedDefine: true
  },
 
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
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
            loader: "scss-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader" //babel的相关配置在.babelrc文件里
      },
      {
        test: /\.(png|jpg|gif|ttf|svg|woff|eot)$/,
        loader: "url-loader",
        query: {
          limit: 30000 //把一些小图片打包为base64
        }
      }
    ]
  },
  plugins: [
    //压缩js代码
    new webpack.optimize.UglifyJsPlugin({
      //输出不显示警告
      compress: {
        warnings: false //默认值
      },
      //输出去掉注释
      output: {
        comments: false //默认值
      }
    })
  ]
};