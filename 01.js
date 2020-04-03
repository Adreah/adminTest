//引入request模块，
var http=require("http"); 
// console.log(http)
//创建服务器（createServer），req--> request , res--> response 响应
var server=http.createServer((req,res)=>{
    console.log("hello node");
    //设置响应头   参数：状态码   文件类型  text/html  image/jpeg  image/gif  编码 utf-8
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.end("我已经结束了");
})
//监听端口
server.listen(3000);