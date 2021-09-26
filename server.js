// node.js comes with pre-built modules
// here, we need to import that specific module using "require" syntax, instead of "import" (ES6)
const http = require("http");

//here we are defining HOST name & PORT name
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

// here, we are creating the HTTP server
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello World");
});

//to start server, we have it listen to...
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});

console.log(__filename);
console.log(__dirname);