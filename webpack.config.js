// 首先导入一个模块
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    // publicPath: "dist/", //url加载不出来
  },
  module: {
    rules: [
      // 配置css

      {
        // css-loader 只负责加载
        // style-loader 负责样式添加  读取loader 从右向左读取
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // 配置less
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              //当加载的图片 小于limit时
              //  会将图片编译成base64字符串形式
              //  大于时 需要 npm i -D file-loader
              limit: 8196,
              name: "img/[name].[hash:8].[ext]", //给图片重新命名
            },
          },
        ],
      },
      {
        //babel-loader 将es6代码换成es5
        test: /\.m?js$/,
        //exclude 排除
        // include  包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    //alias  别名
    // 使用vue配置
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
};
