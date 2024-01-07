const express = require("express");
const Router = express.Router();
const VocabularyController = require("../controllers/VocabularyController");

Router.post("/add-exist-to-lesson", VocabularyController.addExistVocabularyToLesson);
Router.post("/add-new-to-lesson", VocabularyController.addNewVocabularyToLesson);

module.exports = Router