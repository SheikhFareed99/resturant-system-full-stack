const express = require("express");
const cors = require("cors");
const menuData = require("./menu");
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;
let orders = [];
app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);
app.get("/menu/:category", (req, res) => {
  res.json(menuData[req.params.category]);
});

app.post("/order", (req, res) => {
  const { order } = req.body;
  if (!order || order.length === 0) {
    return res.status(400).json({ message: "Order cannot be empty" });
  }

  orders.push(order);
  console.log("New Order Received:", order);
  res.status(201).json({ message: "Order placed successfully", order });
});

app.get("/", (req, res) => {
  res.send("hi mates");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
