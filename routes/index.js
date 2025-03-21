const express = require("express");
const router = express.Router();

router.use("/api", require("./api"));
router.use("/", require("./landing-pages"));

module.exports = router;
