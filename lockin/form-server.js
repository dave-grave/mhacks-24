const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const port = 3019;

const app = express();

app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log("server started");
});
