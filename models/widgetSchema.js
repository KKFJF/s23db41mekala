const mongoose = require("mongoose");
const widgetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true // "required" instead of "require"
    },
    description: {
        type: String,
        required: true // "required" instead of "require"
    },
    price: {
        type: Number,
        min: 10,
        max: 40.99,
        required: true // "required" instead of "require"
    }
});
module.exports = mongoose.model("Widget", widgetSchema); // Capitalize "Widget" for the model name
