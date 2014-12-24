var clc = require('cli-color');
var exec = require('child_process').exec;

exports.start = function(response){
  console.log(clc.yellow('Request for "start" was called'));

  exec("find /",{ timeout: 10000, maxBuffer: 20000*1024 }, function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(stdout);
  });

}
exports.upload = function(response){

  console.log(clc.yellow('Request for "upload" was called'));
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Upload");

}