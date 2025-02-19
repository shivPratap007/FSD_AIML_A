const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
});     

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});