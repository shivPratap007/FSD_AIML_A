const fs = require("fs");

async function readFile(fileName) {
  try {
    const data = fs.readFileSync(fileName, "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}

async function writeFile(fileName, data) {
  try {
    if (!data) {
      throw new Error("Data not provided");
    }
    fs.writeFileSync(fileName, data);
  } catch (error) {
    console.log(error.message);
  }
}
async function appendFile(fileName, data) {
  try {
    if (!data) {
      throw new Error("Data not provided");
    }
    fs.appendFileSync(fileName, data);
  } catch (err) {
    console.log(err.message);
  }
}
module.exports = {
  readFile: readFile,
  writeFile: writeFile,
  appendFile: appendFile,
  username: "shiv",
};
