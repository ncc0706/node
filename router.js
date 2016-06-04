
function route(handler, pathname, response){
  //console.log('About to route a request for ' + pathname);
  //console.log(typeof handler[pathname]); 
  if(typeof handler[pathname] === 'function'){
    //console.log('abc');
    return handler[pathname](response);
  }else{
    console.log('About to route a request for ' + pathname);
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('404 page not found');
    response.end();
  }
}
exports.route = route;
