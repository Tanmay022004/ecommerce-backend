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

app.use("/api/auth", require("./Routes/authRoutes"));
app.use("/api/products", require("./Routes/productRoutes"));
app.use("/api/cart", require("./Routes/cartRoutes"));
app.use("/api/orders", require("./Routes/orderRoutes"));
app.use("/api/admin", require("./Routes/adminRoutes"));

app.listen(5000, () => console.log("Server running on 5000"));

app.use("/api/payment", require("./Routes/paymentRoutes"));

app.use("/api/admin", require("./Routes/adminRoutes"));

