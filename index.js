var http = require('http');
const PORT = 3000;
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;

var server = http.createServer(function(req, res){ 
    
    var parsedUrl = url.parse(req.url, true);
    var path = parsedUrl.pathname;
    var trimmedpath = path.replace(/^\/+|\/+$/g, '');

    //get the query string as an object
    var queryStringObject = parsedUrl.query;

    // Get HTTP method
    var method = req.method.toLowerCase();

    //get the header as an object
    var headers = req.headers;

    //get payloads if any
    var decoder = new StringDecoder('utf-8');
    var buffer = '';
    req.on('data', function(data){
        buffer += decoder.write(data);
    });
    req.on('end', function(){
        buffer += decoder.end();

        //choose the handler this request should go to

    res.end('Hello World\n');
    // console.log('Request received on path: ' + trimmedPath + 
    //     ' with method: ' + method + 
    //     ' and with these query string parameters: ', queryStringObject);
    console.log('Request received with these payloads: ', buffer);headers);
});

server.listen(PORT, function(){
    console.log(`The server is listening on port ${PORT}`);
});