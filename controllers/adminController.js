exports.getAdminDashboard = (req, res) => {
  res.json({ msg: "Welcome Admin" });
};

exports.getAllOrders = async (req, res) => {
  res.json({ msg: "All orders (placeholder)" });
};