# node学习笔记

helloworld.js helloworld

$node filename 都会显示文件里面的内容,说明node不是根据文件的后缀来执行文件的.

参数传递来一个匿名函数
http.createServer();

**基于事件驱动的回调**

``` javascript

function start(){
  console.log('Request handler \'start\' was called');

  function sleep(milliSeconds){
    var startTime = new Date().getTime();
    while(new Date().getTime() < startTime + milliSeconds){}
  }
  sleep(10000);
  return 'Hello Start';
}

function upload(){
  console.log('Request handler \'upload\' was called');
  return 'Hello upload';
}

exports.start = start;
exports.upload = upload;

```
