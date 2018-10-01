const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  _user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  _state: { type: Schema.Types.Mixed, required: true, ref: "State" },
  addedOn: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("tasks", taskSchema);
