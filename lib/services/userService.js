const mongoose = require("mongoose");

const User = mongoose.model("users");

exports.findUserById = async id => {
  return await User.findById(id);
};

exports.findOne = async conditions => {
  return await User.findOne(conditions);
};

exports.saveUser = async data => {
  return await new User(data).save();
};
