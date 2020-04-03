var fs=require("fs");
//读文件  readFile(url,options,callback)
fs.readFile("./static/1.txt",function(err,data){
    //err----->报错    data------->文件内容
    // console.log(err);  //null
    // console.log(data.toString());

})
//写文件  writeFile(url,data,options,callback)
fs.writeFile("./static/2.txt","hello node",function(err){
    //若文件不存在则创建文件
    console.log(err)
})