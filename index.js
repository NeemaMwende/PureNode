var http = require('http');
const PORT = 3000;
var url = require('url');

var server = http.createServer(function(req, res){ 
    
    var parsedUrl = url.parse(req.url, true);
    var path = parsedUrl.pathname;
    var trimmedpath = path.replace(/^\/+|\/+$/g, '');

    //get the query string as an object
    var queryStringObject = parsedUrl.query;

    // Get HTTP method
    var method = req.method.toLowerCase();
    res.end('Hello World\n');
    console.log('Request received on path: ' + trimmedPath + 
        ' with method: ' + method + 
        ' and with these query string parameters: ', queryStringObject);
});

server.listen(PORT, function(){
    console.log(`The server is listening on port ${PORT}`);
});