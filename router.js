var url = require('url');

var route = function(handle,path,response){
  console.log("Routing the request for " + path)
  if (typeof handle[path] === 'function'){
    handle[path](response);
  }else{
    console.log("No Request handler for "+ path);
    response.writeHead(404,{"Content-Type":"text/plain"});
    response.end('404 Not Found');
  }
}
exports.route = route;