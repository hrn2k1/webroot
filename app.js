var http = require('http')
var port = process.env.PORT || 1338;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World App\n');
}).listen(port);