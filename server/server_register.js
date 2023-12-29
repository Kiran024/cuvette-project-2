const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const url = "mongodb+srv://admin:admin123@cluster0.2rbjkel.mongodb.net/?";
const dbName = "reactecome";
console.log("mm");

const client = new MongoClient(url);
console.log("mm2");

const myapp= async () => {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("mm3");

    // Make the appropriate DB calls
    // await  listDatabases(client);

} catch (e) {
console.log("mm4");

    console.error(e);
} 
}
myapp()

const db = client.db(dbName);

app.post("/register", (req, res) => {
  const { name, mobile, email, password } = req.body;
  console.log('register called');

  const collection = db.collection("users");
  collection.insertOne({ name, mobile, email, password }, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json({ message: "Registration successful" });
  });
});

app.post("/login", async(req, res) => {
  const { email, password } = req.body;
  console.log('login called');

  const collection = db.collection("users");
  console.log('login 1');
  try {
    const result = await collection.findOne({ email, password });
  
    console.log('login 2');
  
    if (!result) {
      return res
        .status(401)
        .json({ error: "Invalid credentials", login: false });
    }
  
    console.log('login 4');
    return res.status(200).json({ message: "Login successful", login: true });
  } catch (err) {
    console.log('login 5')
    console.error(err);
    return res
      .status(500)
      .json({ error: "Internal Server Error", login: false });
  }
  
});

app.listen(port, () => {
  console.log(`Server for registration is running on port ${port}`);
});
