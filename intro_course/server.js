const http = require('http')
const port = 3000
http.createServer((req,res) => {

    let body = ""
    
    req.on('data', function(chunk){
        console.log("asdf")
        body += chunk
    })

    req.on('end', function() {
        console.log("asdf")
        console.log(body);
        res.write(body); 
        res.end(); 
    });

    console.log("REQ:", req)
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end('Hello' + req.headers +' World\n')
}).listen(port)

console.log(`Server running at http://localhost:${port}/`)