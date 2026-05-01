// routes/paymentRoutes.js

const express = require("express");
const router = express.Router();
const { simulatePayment } = require("../controllers/paymentController");
const auth = require("../middleware/auth");

router.post("/pay", auth, simulatePayment);

module.exports = router;