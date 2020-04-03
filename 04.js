//引入模块
var http=require("http");
var fs=require("fs");
//创建服务器
http.createServer(function(req,res){
    if(req.url=="/red"){
        fs.readFile("./static/red.html",function(err,data){
            res.end(data.toString())
        })
    }else if(req.url=="/green"){
        fs.readFile("./static/green.html",function(err,data){
            res.end(data.toString())
        })
    }else if(req.url=="/red.css"){
        fs.readFile("./static/red.css",function(err,data){
            res.end(data)
        })
    }else if(req.url=="/1.jpg"){
        fs.readFile("./1.jpg",function(err,data){
            res.end(data)
        })
    }else{
        res.end("404")
    }
}).listen(3000,function(){
    //监听
    console.log("服务器已挂起")
})