# Node Http Module

Node.js has a built-in moudle called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

* As a Web Server `http.createServer()`

```js
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
    res.setHeader('Content-Type', 'aplication/json');
    res.setHeader('X-Powered-By', 'Node.js');
    // We want o send data from data variable.
    res.end(JSON.stringify({
        success: true,
        data: todos
    }));
});

// Create a port number
const PORT = 5000;

// Call our server, by using the listen() method
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```