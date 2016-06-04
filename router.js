
function route(handler, pathname){
  //console.log('About to route a request for ' + pathname);
  //console.log(typeof handler[pathname]); 
  if(typeof handler[pathname] === 'function'){
    //console.log('abc');
    return handler[pathname]();
  }else{
    console.log('About to route a request for ' + pathname);
    return '404 page not found';
  }
}
exports.route = route;
