const express = require("express");
const router = express.Router();
const { createCategory, findAllCategory } = require("../controllers/category");
const { createNotes, findNotesByCategory } = require("../controllers/notes");


router.post("/category", createCategory);
router.get("/category", findAllCategory);
router.post("/notes", createNotes);
router.get("/notes/:category", findNotesByCategory);

module.exports = router;
