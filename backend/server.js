const express = require("express");
const app = express();
const port = 5000;
const fruits = require("./data/fruits");
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://hyunkyu:<hyunkyu1234>@cluster0.vpbup.mongodb.net/mernfruits?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection
db.once('open',()=>console.log('Connected to DB')) 



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
