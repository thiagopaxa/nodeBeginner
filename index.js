var router = require('./router');
var server = require('./server');
var requestHandlers = require('./requestHandlers');

var handle = {
  '/' : requestHandlers.start,
  '/start' : requestHandlers.start,
  '/upload' : requestHandlers.upload
}

server.start(router.route,handle);