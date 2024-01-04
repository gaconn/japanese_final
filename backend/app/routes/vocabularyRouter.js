const express = require("express");
const Router = express.Router();
const VocabularyController = require("../controllers/VocabularyController");

Router.put("/add-to-lesson", VocabularyController.addNewVocabularyToLesson);

module.exports = Router