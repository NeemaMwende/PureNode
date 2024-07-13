var http = require('http');
const PORT = 3000;
var server = http.createServer(function(req, res){ 
    res.end('Hello World\n');
});

server.listen(PORT, function(){
    console.log(`The server is listening to port ${PORT}`);
})