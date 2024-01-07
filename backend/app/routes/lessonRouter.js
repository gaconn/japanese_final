const express = require("express");
const Router = express.Router();
const LessonController = require("../controllers/LessonController")

Router.post("/create", LessonController.create);

module.exports = Router