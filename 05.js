var path=require("path");
// console.log(path)

//basename 返回path的最后一部分
// console.log(path.basename("aa/bb/cc/1.js"));   //1.js

//dirname  返回目录名
// console.log(path.dirname("aa/bb/cc/1.js"));   //aa/bb/cc

//format  从对象中解析出路径字符串
// console.log(path.format({         ///aa\1.js
//     dir:"/aa",   //目录
//     root:"/bb/",  //目录s
//     base:"1.js",  //文件名称 = name + ext
//     name:"abc",   
//     ext:".css"    //后缀名
// }))
//*****注意：
//如果dir和root同时存在，root会被忽略
//如果base,name,ext同时存在，则会忽略 name 和 ext

//parse 返回一个对象
// console.log(path.parse("aa/bb/cc/1.js"));   //{ root: '', dir: 'aa/bb/cc', base: '1.js', ext: '.js', name: '1' }

//join  将所有的名称利用path.seq连起来，再通过normalize格式化
// console.log(path.join("/aa","/bb","/cc","1.js"));  // \aa\bb\cc\1.js

//normalize  格式化  规范化返回的path
// console.log(path.normalize("/aa//////bb/../1.js"));  // \aa\1.js    .. ---》上一级

//extname   获取文件后缀名
// console.log(path.extname("/aa/bb/cc/1.css"));  //.css

//resolve  获取文件的绝对路径
// console.log(path.resolve("/aa/bb/1.js"));  //C:\aa\bb\1.js

//relative  获取文件的相对路径
var begin="c:/aa/bb";
var end="c:/dd/v";
console.log(path.relative(begin,end));  // ..\..\dd\v



