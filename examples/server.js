import http from 'http';
const PORT = 5000;

const server = http.createServer((req, res) =>{
    //res.setHeader('Content-Type', 'text/html');
    //res.statusCode = 404; // we can shorten this 
    res.writeHead(500, {
        'Content-Type': 'application/json'
    });
    //res.write('Hello World'); //we can directly use end() for such a simple thing 
    res.end(JSON.stringify({message: "Server Error"}));
});

server.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
});