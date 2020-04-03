var http = require("http")
var fs = require("fs")
var url = require("url")
var server = http.createServer();
server.listen(3000, function () {
    console.log("3000")
})
server.on("request", function (req, res) {
    var urls = url.parse(req.url,true)
    if (urls.pathname == ""){
        fs.readFile("./static/red.htm1", function (err, data) {
            if (!err) {
                res.end(data)
            } else {
                console.log(err)
            }
        })
    }else{
        fs.readFile('' + req.url, function (err, data) {
            if (!err) {
                res.end(data)
            } else {
                console.log(err)
            }
        })
    }
})