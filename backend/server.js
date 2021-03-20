const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const fruitsRouter = require('./routes/fruits');

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => console.log('Connected to DB'));

//4.16버전이후 이전에는 body-parser
app.use(express.json());

app.use('/api/fruits', fruitsRouter);

app.listen(port, () => {
  console.log(`Example app ${port}`);
});
