const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

// Simple placeholder (since you didn’t build full cart logic yet)
router.get("/", auth, (req, res) => {
  res.json({ msg: "User cart fetched" });
});

router.post("/add", auth, (req, res) => {
  res.json({ msg: "Item added to cart" });
});

module.exports = router;