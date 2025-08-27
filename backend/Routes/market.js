const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/market-data/:symbol", async (req, res) => {
  try {
    const { symbol } = req.params;
    const response = await axios.get(
      `http://api.marketstack.com/v1/eod?access_key=${process.env.MARKETSTACK_API_KEY}&symbols=${symbol}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching Marketstack data:", error.message);
    res.status(500).json({ error: "Failed to fetch market data" });
  }
});

module.exports = router;
