const Response = require("../commons/utils/Response");
const VocabularyModel = require("../models/VocabularyModel");

class VocabularyController {
    addExistVocabularyToLesson = async (req, res) => {
        const params = req.body
        if (!params) {
            const response = new Response("Parameters can not be null", true);
            return res.json(response.getResponse())
        }

        try {
            const result = await VocabularyModel.createByTranslationId(params);
            return res.json(result)
        } catch (error) {
            return res.json(new Response([], [error]))   
        }
    }

    addNewVocabularyToLesson = async (req, res) => {
        const params = req.body
        if (!params) {
            const response = new Response("Parameters can not be null", true);
            return res.json(response.getResponse())
        }
    }
}

module.exports = new VocabularyController();