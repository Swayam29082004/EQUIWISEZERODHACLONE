const { model } = require('mongoose');
const { OrdersSchema } = require("../schemas/OrdersSchemas");
const OrderModel = model("order", OrdersSchema);
module.exports = OrderModel;