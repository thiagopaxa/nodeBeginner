var clc = require('cli-color');
var exec = require('child_process').exec;
var querystring = require('querystring');

exports.start = function(response){
  console.log(clc.yellow('Request for "start" was called'));

  var body = '<html>'+
      '<head>'+
      '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />'+
      '<title>NodeBegginer</title>'+
      '</head>'+
      '<body>'+
      '<form action="/upload" method="post">'+
      '<textarea name="text" rows="20" cols="60"></textarea>'+
      '<input type="submit" value="Submit text" />'+
      '</form>'+
      '</body>'+
      '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(body);

}
exports.upload = function(response,postData){

  console.log(clc.yellow('Request for "upload" was called'));
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You've sent: " + querystring.parse(postData).text,'utf8');
  response.end();

}