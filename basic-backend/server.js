// The address of this server connected to the network is: http://localhost:8383
const express = require("express");
const app = express(); // create a backend application
const PORT = 8383;

let data = {
  name: "james",
};

// Website enpoints (For sending back an HTML)

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/dashboard", (req, res) => {
  res.send("<h1>Dashboard</h1>");
});

// TYPE 2 - API endpoints (When submittion happen)

app.get("/api/data", (req, res) => {
  console.log("This one was for data");
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`The sever is listening on ${PORT}....`);
});
