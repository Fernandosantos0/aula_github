const http = require('http');

http.createServer((req, res) => {

    if(req.url === '/') {
        res.write('<h1>Olá mundo!</h1>');
        res.end();
    }
    
}).listen(4000);