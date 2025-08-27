const mongoose = require('mongoose');

const HoldingsSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

// INCORRECT: module.exports = { HoldingsSchema };
// CORRECT: Export the schema directly.
module.exports = HoldingsSchema;