const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");
const db_name = "FSD-CSE-AIML-DB";

async function dbConnect() {
  try {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(db_name);
    const userCollection = db.collection("users");
    const res = await userCollection.find().toArray();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

dbConnect();