// ---------------------- Imports ----------------------
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const STOCK_API_KEY = process.env.STOCK_API_KEY;
// ---------------------- Routes & Models ----------------------
const authRoute = require("./Routes/AuthRoute");
const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrderModel = require("./model/OrdersModel");
const UserModel = require("./model/UserModel");
const marketRoute = require("./Routes/market");

// ---------------------- Config ----------------------
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

// ---------------------- Middlewares ----------------------
app.use(
  cors({
    origin: "http://localhost:3000", // Update this to your frontend URL
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------------------- Routes ----------------------

// Authentication Routes
app.use("/auth", authRoute);
// Market Data Route
app.use("/", marketRoute);

app.use(
  cors({
    origin: "http://localhost:3005",
    credentials: true,
  })
);

// Get all holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

// Get all positions
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.error("Error fetching positions:", err);
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

// Place new order
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const newOrder = new OrderModel({
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully", order: newOrder });
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).json({ error: "Failed to save order" });
  }
});

// Fetch all orders
app.get("/orders", async (req, res) => {
  try {
    const orders = await OrderModel.find({});
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// ---------------------- Server Start ----------------------
const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ Database Connected Successfully!");

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database Connection Failed:", error);
    process.exit(1);
  }
};

startServer();
