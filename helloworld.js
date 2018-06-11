var express = require('express');

var app = express();

app.get('/apple|/ale', function(request, response){
  //console.log('got request for "hello/world"');
  response.send('hello apple or ale');
  });

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
