const express = require("express");
require("dotenv").config();

const app = express();

// Use routes
app.use("/", require("./routes"));
// app.use("/api", require("./routes"));

// Set the port
const port = process.env.PORT || 4000;

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
