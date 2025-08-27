const mongoose = require('mongoose');
// Import the schema, which is now the default export.
const HoldingsSchema = require("../schemas/HoldingsSchemas");

// Use mongoose.model to create the model.
const HoldingModel = mongoose.model("Holding", HoldingsSchema);

module.exports = HoldingModel;