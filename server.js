// Import the library we'll be using.
const http = require("http");

// Create a variable for JSON data to be returned
const todos = [
    { id: 1, text: "Todo One" },
    { id: 2, text: "Todo Two" },
    { id: 3, text: "Todo Three" },
];

// Use the `http` module create a server, and set it's parameter.
const server = http.createServer((req, res) => {
    // Destructuring our http module for known variables in the Request object
    const { method, url } = req;

    // Create an empty array variable
    let body = [];

    // In the request, send data to the body, using Array.push()
    req.on("data", chunk => {
        body.push(chunk);
    }).on("end", () => {
        body = Buffer.concat(body).toString();

        // Initiatlize variables
        let status = 404;
        // Our resonse object
        const response = {
            success: false,
            data: null,
            error: null
        };

        // Sets a condition, and update variable values if condition is met
        // 1. Request method is a GET
        // 2. URL path is to path /todos
        if (method == "GET" && url === "/todos") {
            status = 200;
            response.success = true;
            response.data = todos;

            // If path is a POST
        } else if (method === "POST" && url === "/todos") {
            // Descture to return as JSON
            const { id, text } = JSON.parse(body);

            // Perform validation, if text is not inserted
            if (!id || !text) {
                status = 400;
                response.error = 'Please add id and text';
            } else {
                todos.push({ id, text });
                status = 201;

                // Returns a response
                response.success = true;
                response.data = todos;
            }
        }

        res.writeHead(status, {
            "Content-Type": "aplication/json",
            "X-Powered-By": "Node.js",
        });

        // We want to send data from response variable.
        res.end(JSON.stringify(response));
    });

    console.log(req.headers.authorization);
});

// Create a port number
const PORT = 5000;

// Call our server, by using the listen() method
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
