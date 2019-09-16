var http = require('http');


var server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
        
    if (req.url === '/hello') {
        res.end("{'data':'HELLO HOW ARE YOU!'}");
    }

    else if (req.url === '/name') {
        res.end("{'name':'Smarpit'}");
    }

})
.listen(5000);