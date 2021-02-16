// common使用
const { add, mul } = require("./js/mathUtils");
console.log(add(20, 30));
console.log(mul(20, 30));

// es6
import { name, age, height } from "./js/info";
console.log(name);
console.log(age);
console.log(height);

// 依赖css文件  npm i -D css-loader npm i -D style-loader
// require("./css/nomal.css");

// // 依赖 less文件 npm i -D less-loader less
// require("./css/special.less");
// document.writeln("<h2>你好</h2>");

// npm i -D url-loader  npm i -D file-loader

// npm i -D babel-loader babel-core babel-preset-es2015

// 安装vue
// 使用Vue进行开发
import Vue from "vue";

const app = new Vue({
  el: "#app",
  data: {
    message: "hellow webpack",
  },
});

// var app = new Vue({
//   el: "#app",
//   data: {
//     message: "Hello Vue!",
//   },
// });
