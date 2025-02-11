const { readFile, writeFile, username } = require("./FileSync");
readFile("dummy.txt");
writeFile("dummy.txt", "This is the new added data");
readFile("dummy.txt");
console.log(username);
