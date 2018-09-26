const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./models/State");
require("./models/Task");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "test message" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
