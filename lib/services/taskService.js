const mongoose = require("mongoose");

const Task = mongoose.model("tasks");

exports.findTaskById = async id => {
  return await Task.findById(id);
};

exports.findAll = async userId => {
  return await Task.find({ _user: userId });
};

exports.saveTask = async data => {
  return await new Task(data).save();
};

exports.updateTask = async (id, data) => {
  return await Task.findByIdAndUpdate(id, data);
};

exports.deleteTask = async id => {
  return await Task.findByIdAndRemove(id);
};
