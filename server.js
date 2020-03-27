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
    
    // We want to send data from data variable.
    res.end(
        JSON.stringify({
            success: false,
            error: 'Please add email',
            data: null
        })
    );
});

// Create a port number
const PORT = 5000;

// Call our server, by using the listen() method
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));