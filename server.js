// Import the library we'll be using.
const http = require('http');

// Create a variable for JSON data to be returned
const todos = [
    { id: 1, text: 'Todo One'},
    { id: 2, text: 'Todo Two'},
    { id: 3, text: 'Todo Three'},
]

// Use the `http` module create a server, and set it's parameter.
const server = http.createServer((req, res) => {
    res.writeHead(400, {
        'Content-Type' : 'aplication/json',
        'X-Powered-By' : 'Node.js'
      });

    // Create an empty array variable
    let body = [];

    // In the request, send data to the body, using Array.push()
    req.on('data', chunk => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);
    });
     
    console.log(req.headers.authorization);
    
    // We want to send data from data variable.
    res.end(
        JSON.stringify({
            success: true,
            data: todos
        })
    );
});

// Create a port number
const PORT = 5000;

// Call our server, by using the listen() method
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));