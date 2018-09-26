const mongoose = require("mongoose");
const { Schema } = mongoose;

const stateSchema = new Schema({
  name: String
});

mongoose.model("states", stateSchema);
