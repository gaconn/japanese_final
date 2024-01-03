const Response = require("../commons/utils/Response");
const VocabularyModel = require("../models/VocabularyModel");

class VocabularyController {
    addNewVocabularyToLesson = async (req, res) => {
        const params = req.body
        if (!params) {
            const response = new Response(LESSON_CONTROLLER_CONST.PARAM_CREATE_IS_NULL_MESSAGE, true);
            return res.json(response.getResponse())
        }

        try {
            const result = await VocabularyModel.create();
            return res.json(result)
        } catch (error) {
            
        }
    }
}

module.exports = new VocabularyController();