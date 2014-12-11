var clc = require('cli-color');
var exec = require('child_process').exec;

exports.start = function(){
  console.log(clc.yellow('Request for "start" was called'));
  var content = "empty";

  exec("ls -lah", function (error, stdout, stderr) {
    content = stdout;
  });

  return content;

}
exports.upload = function(){
  console.log(clc.yellow('Request for "upload" was called'));
  return "Hello Upload";

}