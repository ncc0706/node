var http = require('http');
var url  = require('url');

function start(route, handler){
 function onRequest(request, response){
  var postData = ""; 
  var pathname = url.parse(request.url).pathname;
   
  request.setEncoding('utf-8'); 
  
  request.addListener('data', function(postDataChunk){
   postData += postDataChunk;
   console.log(postDataChunk);
  });
  
  request.addListener('end', function(){
    
    route(handler, pathname, response, postData);
  });

 }
 
 http.createServer(onRequest).listen(8080);
 console.log('Server has started');
}


/*
http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World');
  response.end();
}).listen(8080);
*/

/*
http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<h2>Hello World</h2>');
  response.end();
}).listen(8080);
*/

/*
function onRequest(request, response){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<h3>Hello World</h3>');
  response.write('<h4>nodemon server.js</h4>');
  response.end();
}

http.createServer(onRequest).listen(8080);
*/

/*
function onRequest(request, response){
  console.log("Request	received.");
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<h3>Hello World</h3>');
  response.write('<h4>nodemon server.js</h4>');
  response.end();
}
http.createServer(onRequest).listen(8080);
console.log('Server has started');
*/


exports.start = start;

