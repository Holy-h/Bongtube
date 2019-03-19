const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Express Server is running on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
