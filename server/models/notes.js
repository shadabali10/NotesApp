const mongoose = require("mongoose");

let NotesSchema = mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Notes", NotesSchema);
