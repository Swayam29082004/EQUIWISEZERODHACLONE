const { model } = require('mongoose');
const { PositionsSchema } = require('../schemas/PositionsSchemas');
const PositionModel = model("Position", PositionsSchema);
module.exports = PositionModel;