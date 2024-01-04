const Response = require("../commons/utils/Response");
const VocabularyModel = require("../models/VocabularyModel");

class VocabularyController {
    addNewVocabularyToLesson = async (req, res) => {
        const params = req.body
        if (!params) {
            const response = new Response("Parameters can not be null", true);
            return res.json(response.getResponse())
        }

        try {
            const result = await VocabularyModel.create(params);
            return res.json(result)
        } catch (error) {
            
        }
    }
}

module.exports = new VocabularyController();