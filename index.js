const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static path
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/home.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/pages/login.html");
});

app.post("/login", async (req, res) => {
  // login and get your flags
  const username = req.body.username;
  const password = req.body.password;

  if (process.env.user === username && process.env.pass === password) {
    res.sendFile(__dirname + "/pages/home2.html");
  } else {
    res.json({
      error: "wrong username or password!",
    });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Uncle Cat's app listening on port ${port}!`);
});
