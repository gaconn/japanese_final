const express = require("express");
const Router = express.Router();
const LessonController = require("../controllers/LessonController")

Router.post("/create", LessonController.create);
Router.get("/get_all", LessonController.getAll)
Router.get("/load_all_data_by_id", LessonController.loadAllDataById)

module.exports = Router