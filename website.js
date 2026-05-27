const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader = {
        'Content-Type': 'text/html'
    }
    if (req.url === '/') {
         res.statusCode = 200;
         res.end('<h1>Hello this is first page</h1><p>Welcome to first page</p>');
    }else if (req.url === '/index') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }else{
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1><p>Page not found</p>');
    }
    })
    server.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
    });