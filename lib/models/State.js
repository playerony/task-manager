const mongoose = require("mongoose");
const { Schema } = mongoose;

const stateSchema = new Schema({
  name: { type: String, required: true },
  priority: { type: Number, required: true }
});

module.exports = mongoose.model("states", stateSchema);
