const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("landing"); // or res.send('Welcome to the homepage!')
});

module.exports = router;
