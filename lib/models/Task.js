const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = require("./User");
const StateSchema = require("./State");

const taskSchema = new Schema({
  name: String,
  description: String,
  _user: UserSchema,
  _state: StateSchema,
  addedOn: {
    type: Date,
    default: Date.now()
  }
});

mongoose.model("tasks", taskSchema);
