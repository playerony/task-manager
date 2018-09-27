const mongoose = require("mongoose");

const State = mongoose.model("states");

exports.findStateById = async id => {
  return await State.findById(id);
};

exports.findOne = async conditions => {
  return await State.findOne(conditions);
};

exports.saveState = async data => {
  return await new State(data).save();
};
