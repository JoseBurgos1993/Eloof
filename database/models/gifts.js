const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gifts = new Schema({
  kidId: { type: String },
  name: { type: String },
  discription: { type: String },
  picture: { type: String },
  price: { type: Number },
  url: { type: String },
  purchased: { type: Boolean, default: false },
});

const Gifts = mongoose.model("Gifts", gifts);

module.exports = Gifts;
