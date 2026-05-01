const express = require("express");
const router = express.Router();
const { getAdminDashboard, getAllOrders } = require("../Controllers/adminController");

router.get("/dashboard", getAdminDashboard);
router.get("/orders", getAllOrders);

module.exports = router;