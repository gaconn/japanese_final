const Response = require("../commons/utils/Response");
const VocabularyModel = require("../models/VocabularyModel");

class VocabularyController {
    /**
     * Add existing word to lesson to be new vocabulary
     * @param
     * body: {
     *  LessonId, 
     *  LearningTime, 
     *  TypeWord, 
     *  TranslationId
     * }
     * @returns {Response} If success {object, []}, if fail {[], [error...]}
     */
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
            return res.json(new Response([], [error]).getResponse())   
        }
    }

    /**
     * Create directly a new word to to lesson
     * @param
     * body: {
     *  LessonId, 
     *  LearningTime, 
     *  TypeWord, 
     *  Vietnamese, 
     *  WordHiragana|WordKatakana|WordKanji, 
     *  [SinoVietnamese] , 
     *  [Detail] *The detail of vn_jp_translation
     * }
     * @returns {Response} If success {object, []}, if fail {[], [error...]}
     */
    addNewVocabularyToLesson = async (req, res) => {
        const params = req.body
        if (!params) {
            const response = new Response("Parameters can not be null", true);
            return res.json(response.getResponse())
        }

        try {
            const result = await VocabularyModel.createNewWordAndAddToLesson(params)
            return res.json(result)
        } catch (error) {
            return res.json(new Response([], [error]).getResponse())
        }
    }
}

module.exports = new VocabularyController();