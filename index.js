const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Express Server is running on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("I am Home");
}

function handleProfile(req, res) {
  res.send("I am Profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
