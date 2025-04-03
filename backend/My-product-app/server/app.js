const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors());

const m1 = (req, res, next) => {
  const age = req.query.age;
  if (!age) {
    return res.status(400).json({ message: "Please provide age" });
  }
  if (age < 18) {
    return res
      .status(401)
      .json({ message: "You are not allowed to access this resource" });
  }
  next();
};

app.use(express.json());

const PORT = 3000;

app.get("/users", (req, res) => {
  try {
    const users = fs.readFileSync("users.json", "utf8") || "[]";
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json(JSON.parse(users));
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/user/:id", (req, res) => {
  const uid = req.params.id;
  if (!uid) {
    return res.status(400).json({ message: "Please provide user id" });
  }

  const users = JSON.parse(fs.readFileSync("users.json", "utf8") || "[]");
  if (users.length === 0) {
    return res.status(404).json({ message: "No users found" });
  }

  const user = users.find((user) => parseInt(user.id) === parseInt(uid));
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.post("/createuser", (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "Please provide name and email" });
    }
    const newId = Date.now();
    const newUser = { id: newId, name, email };
    const users = fs.readFileSync("users.json", "utf8") || "[]";
    if (users.length === 0) {
      fs.writeFile("users.json", JSON.stringify([newUser]));
      console.log("No users found");
    } else {
      const allUsers = JSON.parse(users);
      allUsers.push(newUser);
      console.log(allUsers, "allUsers");
      fs.writeFileSync("users.json", JSON.stringify(allUsers));
    }
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.patch("/edituser/:id", (req, res) => {
  const uid = req.params.id;
  const { name, email } = req.body;
  if (!uid) {
    return res.status(400).json({ message: "Please provide user id" });
  }

  if (!name || !email) {
    res.status(400).json({ message: "Please provide name and email" });
  }
  const users = JSON.parse(fs.readFileSync("users.json", "utf8") || "[]");
  if (users.length === 0) {
    return res.status(404).json({ message: "No users found" });
  }
  const user = users.find((user) => parseInt(user.id) === parseInt(uid));
  if (user) {
    user.name = name;
    user.email = email;
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.delete("/deleteuser/:id", (req, res) => {
  const uid = req.params.id;
  const users = JSON.parse(fs.readFileSync("users.json", "utf8") || "[]");
  if (users.length === 0) {
    return res.status(404).json({ message: "No users found" });
  }
  const index = users.findIndex((user) => parseInt(user.id) === parseInt(uid));
  if (index !== -1) {
    users.splice(index, 1);
    fs.writeFileSync("users.json", JSON.stringify(users));
    res.status(200).json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
