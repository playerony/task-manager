const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = require("./User");
const StateSchema = require("./State");

const taskSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  _user: { type: Schema.ObjectId, required: true, ref: "User" },
  _state: { type: Schema.ObjectId, required: true, ref: "State" },
  addedOn: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("tasks", taskSchema);
