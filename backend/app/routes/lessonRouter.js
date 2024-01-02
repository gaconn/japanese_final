const express = require("express");
const Router = express.Router();
const LessonController = require("../controllers/LessonController")

Router.put("/create", LessonController.create);

module.exports = Router