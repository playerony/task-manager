const mongoose = require("mongoose");

const User = mongoose.model("users");

export const findUserById = async id => {
  return await User.findById(id);
};

export const findOne = async conditions => {
  return await User.findOne(conditions);
};

export const saveUser = async data => {
  return await new User(data).save();
};
