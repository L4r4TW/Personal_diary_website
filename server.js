const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const product = require("./routes/diary");
const users = require("./routes/auth");

// Initialize Express app
const app = express();

//Middleware
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "mysecret",
    resave: false,
    saveUninitialized: false,
    // store: MongoStore.create({
    //   mongoUrl: process.env.MONGO_URI, // MongoDB connection
    // }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1-day session
  })
);

//Endpoints
app.use("/api/products", product);
app.use("/api/users", users);

app.get("/", (req, res) => {
  console.log(req.session);
  console.log(req.session.id);
  req.session.visited = true;
  res.cookie("hello", "world", { maxAge: 60000 * 60 * 2 });
  res.send("Hello World!");
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
