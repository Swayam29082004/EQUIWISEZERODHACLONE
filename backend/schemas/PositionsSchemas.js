const { Schema } = require('mongoose');

const PositionsSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

// Export the schema object directly
module.exports ={PositionsSchema};