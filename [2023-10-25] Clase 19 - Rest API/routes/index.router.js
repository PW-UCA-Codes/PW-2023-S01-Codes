const express = require("express");
const router = express.Router();

router.get("/hello-world", (req, res, next) => {
  const { name } = req.query;

  return res
    .status(200)
    .json({ message: `Hello ${name??"World"}` })
});

router.post("/fullname", (req, res, next)=> {
  const { name, lastname } = req.body;

  if(!name || !lastname) {
    return res.status(400).json({ error: "Bad Request :c" });
  }

  return res.status(200).json({ fullname: `${name} ${lastname}` });
})

module.exports = router;