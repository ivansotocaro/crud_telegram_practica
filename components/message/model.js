const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema(
  {
    user: String,
    message: String,
    date: Date,
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

const model = mongoose.model("message", mySchema);

module.exports = model;
