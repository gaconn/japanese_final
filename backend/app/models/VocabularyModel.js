const { MESSAGE } = require("../commons/constants/Constant");
const Response = require("../commons/utils/Response");
const { isValidDate } = require("../commons/utils/Validate");
const VNJPTranslationRepository = require("../repositories/VNJPTranslationRepository")
class VocabularyModel {

    /**
     * 
     * @param {object} params The parameters need to create process
     * @returns Return response data 
     */
    create = async (params) => {
        if (!params) {
            return new Response([], [new Error(MESSAGE.ERROR_PARAM_CREATE_IS_NULL)]).getResponse();
        }

        var errors = []
        if (!params.LessonId || typeof params.LessonId !== "number" || params.LessonId === 0) {
            errors.push(new Error("LessonId is require and could be number > 0!"))
        }

        if (!params.LearningTime || !isValidDate(params.LearningTime)) {
            errors.push(new Error("LearningTime is require and format could be yyyy-mm-dd"))
        }

        if (!params.TypeWord || !VOCABULARY_TYPE_WORD.hasOwnProperty(params.TypeWord)) {
            errors.push(new Error("TypeWord must be 0 - hiragana/katakana or 1 - kanji"))
        }

        if (errors.length > 0) {
            return new Response([], errors)
        }

        if (params.TranslationId) {
            // check id valid
            const row = await VNJPTranslationRepository.getById(params.TranslationId);
            if (row.length === 0) {
                return new Response("TranslationId is not exist", true);
            }
            return row;
        }
    }
}

module.exports = new VocabularyModel()