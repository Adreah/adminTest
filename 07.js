var url=require("url");
// console.log(url)
// {
//     Url: [Function: Url],
//     parse: [Function: urlParse],
//     resolve: [Function: urlResolve],
//     resolveObject: [Function: urlResolveObject],
//     format: [Function: urlFormat],
//     URL: [Function: URL],
//     URLSearchParams: [Function: URLSearchParams],
//     domainToASCII: [Function: domainToASCII],
//     domainToUnicode: [Function: domainToUnicode],
//     pathToFileURL: [Function: pathToFileURL],
//     fileURLToPath: [Function: fileURLToPath]
//}

//url模块的作用:
//  url 字符串是一个结构化的字符串

//***注意：
//url模块提供了两套api处理url
//node.js遗留特有的api


//parse 解析url 返回一个url属性对象
var data=url.parse("http://localhost:3000/red?username=tom&password=123",true).query;
// console.log(data);

//resolve  解析浏览器超链接，转换成基本的url
//参数： from-->解析时对应的url（原本的url）   to-->要解析的超链接（要替换的url）
var data=url.resolve("/aa/bb/cc","dd");
// console.log(data);  //   /aa/bb/dd
var data2=url.resolve("http://localhost:3000/","fffff");
// console.log(data2);      //  http://localhost:3000/fffff
var data3=url.resolve("http://localhost:3000/aa","ff");
// console.log(data3);      //  http://localhost:3000/ff
// from有/时，拼接；没有/时，替换

//format  返回一个格式化的url字符串
var objurl={
        protocol: 'http:',  //协议
        slashes: true,
        auth: null,       //用户名
        host: 'localhost:3000',   //主机名
        port: '3000',    //端口号
        hostname: 'localhost',   //主机名，不带端口号
        hash: null,     //哈希值
        search: '?username=tom&password=123',   //查询字符串
        query: 'username=tom&password=123',   //请求参数，针对于get
        pathname: '/red',     //路径名
        path: '/red?username=tom&password=123',     //不带查询的路径名
        href: 'http://localhost:3000/red?username=tom&password=123'  //原字符串本身
    }
var mat=url.format(objurl);
console.log(mat);   // http://localhost:3000/red?username=tom&password=123