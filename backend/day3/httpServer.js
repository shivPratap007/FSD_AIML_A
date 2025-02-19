const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async (req, res) => {
  try {
    let url = req.url;
    if (url == "/home" && req.method == "GET") {
      const data = await fs.readFile("home.html");
      if (data) {
        res.write(data);
        res.end();
      }
    } else if (url == "/about" && req.method == "POST") {
      const data = await fs.readFile("about.html");
      if (data) {
        res.write(data);
        res.end();
      }
    } else {
      res.write("<h1>404 Page Not Found</h1>");
      res.end();
    }
  } catch (err) {
    console.error(err);
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
