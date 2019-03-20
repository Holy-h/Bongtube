import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Express Server is running on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("I am Home");

const handleProfile = (req, res) => res.send("I am Profile");

const middelware = (req, res, next) => {
  console.log("빼꼼");
  next();
};

app.use(middelware);

app.get("/", handleHome);

app.use(middelware);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
