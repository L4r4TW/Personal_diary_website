const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.session.id);
  req.sessionStore.get(req.session.id, (err, sessionData) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(sessionData);
  });

  return res.send("Budos kurva");
});

module.exports = router;
