import app from "./app";

const PORT = 4000;

const handleListening = () =>
  console.log(`Express server on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
