const express = require('express');
const app = express();
var http = require('http');

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
