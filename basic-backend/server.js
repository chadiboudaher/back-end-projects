// The address of this server connected to the network is: http://localhost:8383
const express = require("express");
const app = express(); // create a backend application
const PORT = 8383;

// HTTP VERBS || ROUTES (or paths)
app.get("/", (req, res) => {
  console.log("YAY I HIT AN END POINT", req.method);
  res.sendStatus(200);
  //   res.send("This is the main page");
});

app.get("/dashboard", (req, res) => {
  console.log("I am now in the dashboard");
  res.send("hi");
});

app.listen(PORT, () => {
  console.log(`The sever is listening on ${PORT}....`);
});
