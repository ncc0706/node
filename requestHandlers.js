
var querystring = require('querystring');

function start(response){
  console.log('Request handler \'start\' was called');
  var body = '<!doctype html><html>' +
      '<head>' + 
      '<meta charset="utf-8"/>' + 
      '</head>' + 
      '<body>' + 
      '<form action="/upload" method="POST">' + 
      '<textarea name="text" rows="20" cols="60"></textarea>' +
      '</br><input type="submit" value="submit"/>' + 
      '</form>' +
      '</body>' +
      '</html>';

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(body);
  response.end();
}

function upload(response, postData){
  console.log('Request handler \'upload\' was called');
  response.writeHead(200, {'Content-Type': 'text/plain'});
//  response.write('Hello Upload-->>' + postData);
  response.write('Hello Upload-->>' + querystring.parse(postData).text );
  response.end();
}

exports.start = start;
exports.upload = upload;


