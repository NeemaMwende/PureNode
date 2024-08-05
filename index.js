const http = require('http');
const url = require('url');
const PORT = 3000;

const server = http.createServer((req, res) => {
    // Parse the URL and extract the path and query string
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const queryStringObject = parsedUrl.query;

    // Get the HTTP method
    const method = req.method.toLowerCase();

    // Get the headers
    const headers = req.headers;

    // Collect the payload if any
    let buffer = '';
    req.on('data', (data) => {
        buffer += data.toString();
    });
    req.on('end', () => {
        // Log the request details
        console.log('Request received on path:', trimmedPath);
        console.log('Method:', method);
        console.log('Query string parameters:', queryStringObject);
        console.log('Headers:', headers);
        console.log('Payload:', buffer);

        // Send response
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World\n');
    });
});

server.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});
