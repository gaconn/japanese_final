const Response = require("../commons/utils/Response");

class VocabularyController {
    addNewVocabularyToLesson = (req, res) => {
        const params = req.body
        if (!params) {
            const response = new Response(LESSON_CONTROLLER_CONST.PARAM_CREATE_IS_NULL_MESSAGE, true);
            return res.json(response.getResponse())
        }
    }
}