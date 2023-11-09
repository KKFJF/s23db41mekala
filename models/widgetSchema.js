const mongoose = require("mongoose")
const widgetSchema = mongoose.Schema({
name: String,
price: Number,
description: String
})
module.exports = mongoose.model("widget",
widgetSchema)