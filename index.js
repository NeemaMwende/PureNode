var http = require('http');
const PORT = 3000;
var url = require('url');

var server = http.createServer(function(req, res){ 
    
    var parsedUrl = url.parse(req.url, true);

    var path = parsedUrl.pathname;
    var trimmedpath = path.replace(/^\/+|\/+$/g, '');


    res.end('Hello World\n');

    console.log('Request is received on path ' +trimmedpath);


});

server.listen(PORT, function(){
    console.log(`The server is listening to port ${PORT}`);
})