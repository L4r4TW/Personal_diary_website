const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const dotenv = require("dotenv");

const product = require("./routes/diary");

// Initialize Express app
const app = express();

app.use("/api/products", product);

app.get("/", (req, res) => {
  res.cookie("hello", "world", { maxAge: 60000 });
  res.send("Hello World!");
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
