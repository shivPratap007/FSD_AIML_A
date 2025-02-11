const fs = require("fs");

function myReadFile(fileName) {
  try {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data);
    });
  } catch (err) {
    console.log(err.message);
  }
}

function myWriteFile(fileName, fileData) {
  try {
    fs.writeFile(fileName, fileData, "utf-8", (err) => {
      if (err) {
        throw err;
      }
      console.log("Data successfully written");
    });
  } catch (err) {
    console.log(err.message);
  }
}
myWriteFile("dummy.txt", "Hello baccho");
myReadFile("dummy.txt");
