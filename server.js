var http = require('http');
var url = require('url');
var clc = require('cli-color');

var start = function(route,handle){
  var onRequest = function(req,res){
    var urlFull = url.parse(req.url,true);
    var pathname = urlFull.pathname;
    console.log("Request for \'" + pathname + "\' received");
    content = route(handle,pathname,res)
    res.writeHead(200,{"Content-Type":"text/plain"});
    
    res.write(content);
    res.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log(clc.cyan.bold("Server started"))

  // var interval = setInterval(function(){
  //   process.stdout.write('\x07')
  // }, 050);

  // setTimeout(function(){
  //   clearInterval(interval)
  // }, 3000)

}
exports.start = start;