const Notes = require("../models/notes");
const Category = require("../models/category");

const createNotes = async (req, res) => {
  try {
    const { content, category } = req.body;
    if (!content || !category) {
      return res
        .status(400)
        .send({ message: "Content and Category are required" });
    }

    const findCategory = await Category.findById(category);
    if (!findCategory) {
      return res.status(400).send({ message: "Category not found" });
    }
    const newNotes = new Notes(req.body);
    await newNotes.save();
    res.status(201).send(newNotes);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const findNotesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    if (!category) {
      return res.status(400).send({ message: "Category is required" });
    }
    const findCategory = await Category.findById(category);
    if (!findCategory) {
      return res.status(400).send({ message: "Category not found" });
    }
    const notes = await Notes.find({ category });
    res.status(200).send(notes);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = {
  createNotes,
  findNotesByCategory,
};
