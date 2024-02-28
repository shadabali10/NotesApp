const mongoose = require("mongoose");

let CategorySchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "black",
  },
  keyword: {
    type: String,
    required: true,
  },
},{
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model("Category", CategorySchema);
