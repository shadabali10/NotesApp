const mongoose = require("mongoose");

let NotesSchema = mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
},{
  timestamps: true,
  versionKey: false

});

module.exports = mongoose.model("Notes", NotesSchema);
