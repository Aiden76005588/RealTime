const express = require("express");
const app = express();
const port = 5000;
const fruits = require("./data/fruits");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/fruits", (req, res) => {
  res.json(fruits);
});

app.get("/fruits/:id", (req, res) => {
  const fruit = fruits.find((f) => f._id === req.params.id);
  res.json(fruit);
});
app.listen(port, () => {
  console.log(`Example app ${port}`);
});
