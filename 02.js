//引入request模块，
var http = require("http");
//创建服务器（createServer），req--> request , res--> response 响应
var server=http.createServer((req,res)=>{
    //设置响应头   参数：状态码   文件类型  text/html  image/jpeg  image/gif  编码 utf-8
    res.writeHead(200, {"Content-type": "text/html;charset=utf-8"});
    //获取地址栏路径
    console.log(req.url);
    switch (req.url) {
        case "/red":
            //写入
            res.write("red");
            break;
        default:
            res.write("我是默认的")
    }
    // if(req.url=="/red"){
    //     res.write("red")
    // }else{
    //     res.write("我是默认的")
    // }
    res.end();
})
server.listen(3000);