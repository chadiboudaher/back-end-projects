// The address of this server connected to the network is: http://localhost:8383
const express = require("express");
const app = express(); // create a backend application
const PORT = 8383;

let data = ["james"];

app.use(express.json()); // configure to expect json data

// Website enpoints (For sending back an HTML)

app.get("/", (req, res) => {
  res.send(`
    <body 
    style="background:pink;
    color:blue">
      <p>${JSON.stringify(data)}</p>
      <a href="/dashboard">dashboard</a>
    </body>
    `);
});

app.get("/dashboard", (req, res) => {
  res.send(
    `<body>
      <h1>Dashboard</h1>
      <a href="/">HomePage</a>
    </body>`
  );
});

// TYPE 2 - API endpoints (When submittion happen)

// CRUD - read-get create-post update-put delete-delete

app.get("/api/data", (req, res) => {
  console.log("This one was for data");
  res.status(599).send(data);
});

app.post("/api/data", (req, res) => {
  // someone want to create a user
  const newEntry = req.body;
  console.log(newEntry);
  data.push(newEntry.name);
  res.sendStatus(201);
});

app.delete("/api/data", (req, res) => {
  data.pop();
  console.log("We deleted the last element of the array");
  res.sendStatus(203);
});

app.listen(PORT, () => {
  console.log(`The sever is listening on ${PORT}....`);
});
