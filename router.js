var url = require('url');

var route = function(handle,path){
  console.warn("Routing the path: " + path)
  if (typeof handle[path] === 'function'){
    return handle[path]();
  }else{
    console.log("No Request handler for "+ path);
    return '404 Not Found'
  }
}
exports.route = route;