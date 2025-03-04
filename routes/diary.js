const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.session);
  console.log(req.session.id);
  if (req.cookies.hello && req.cookies.hello === "world")
    return res.send("Kurva anyad te kukizabalo");
  return res.send("Itt nincs neked kuki te buzi!");
});

module.exports = router;
