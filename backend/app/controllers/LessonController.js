const { LESSON_CONTROLLER_CONST } = require("../commons/constants/LessonConstant");
const Response = require("../commons/utils/Response");
const LessonModel = require("../models/LessonModel");

class LessonController {
  create = async (req, res) => {
    try {
      const params = req.body
      if (!params) {
        const response = new Response(LESSON_CONTROLLER_CONST.PARAM_CREATE_IS_NULL_MESSAGE, true);
        return res.json(response.getResponse())
      }

      const result = await LessonModel.create(params);
      return res.json(result);
    } catch (error) {
      const response = new Response(error.message, true);
      return res.json(response.getResponse());
    }
 }
}

module.exports = new LessonController();