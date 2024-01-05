const express = require("express");
const Router = express.Router();
const VocabularyController = require("../controllers/VocabularyController");

Router.put("/add-exist-to-lesson", VocabularyController.addExistVocabularyToLesson);
Router.put("/add-new-to-lesson", VocabularyController.addNewVocabularyToLesson);

module.exports = Router