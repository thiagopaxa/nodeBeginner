var clc = require('cli-color'),
    exec = require('child_process').exec,
    querystring = require('querystring'),
    fs = require('fs'),
    formidable = require('formidable');

exports.start = function(response){
  console.log(clc.yellow('Request for "start" was called'));

  var body = '<html>'+
      '<head>'+
      '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />'+
      '<title>NodeBegginer</title>'+
      '</head>'+
      '<body>'+
      '<form action="/upload" method="post" enctype="multipart/form-data">'+
      '<input type="file" name="upload"/>'+
      '<input type="submit" value="Upload file" />'+
      '</form>'+
      '</body>'+
      '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(body);

}
exports.upload = function(response,request){
  
  console.log(clc.yellow('Request for "upload" was called'));
  
  var form = new formidable.IncomingForm();
  console.log("About to parse")
  form.parse(request,function(error,fields,files){
    console.log(clc.red("parsing done"));
    fs.rename(files.upload.path, "/tmp/test.png", function(err) {
      if (err) {
        fs.unlink("/tmp/test.png");
        fs.rename(files.upload.path, "/tmp/test.png");
      }
    });

  })
  response.writeHead(200, {"Content-Type": "text/plain"});
  // response.write("You've sent: " + querystring.parse(postData).text,'utf8');
  response.end();

}
exports.show = function(response){

  console.log(clc.yellow('Request for "show" was called'));
  fs.readFile("/tmp/test.png","binary",function(error,file){
    if (error) {
      response.writeHead(500,{"Content-Type":"text/plain"});
      response.write(error + '\n');
      response.end();
    };
      response.writeHead(200,{"Content-Type": 'image/png'});
      response.write(file,"binary");
      response.end();
  })

}