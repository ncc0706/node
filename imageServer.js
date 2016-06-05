var formidable = require('formidable'),
    http       = require('http'),
    sys        = require('sys');


http.createServer(function(req, res){
    
   if(req.url == '/upload' && req.method.toLowerCase() == 'post'){
       var form = new formidable.IncomingForm();
       form.parse(req, function(err, fields, files){
           res.writeHead(200, {'Contenty-Type':'text/plain'});
	   res.write('receivew upalod \n\n');
           res.end(sys.inspect({fields: fields,files: files}));
       });
       return ;
   }

   // show a file upload from
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end(
    '<form action="upload" enctype="multipart/form-data" method="post">' + 
    '<input type="text" name="title"/></br>' + 
    '<input type="file" name="upload" multiple="multiple"/></br>' + 
    '<input type="submit" value="upload"/>' + 
    '</form>' 
   );


}).listen(8080);

