var url = require('url');

exports.route = function(handle,path,response,request){
  console.log("Routing the request for " + path)
  if (typeof handle[path] === 'function'){
    handle[path](response,request);
  }else{
    console.log("No Request handler for "+ path);
    response.writeHead(404,{"Content-Type":"text/plain"});
    response.end('404 Not Found');
  }
}