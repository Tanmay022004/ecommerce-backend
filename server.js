require("dotenv").config();

console.log(process.env.JWT_SECRET); 

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

app.listen(5000, () => console.log("Server running on 5000"));

app.use("/api/payment", require("./routes/paymentRoutes"));

app.use("/api/admin", require("./routes/adminRoutes"));

