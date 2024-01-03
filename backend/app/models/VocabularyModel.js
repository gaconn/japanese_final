const VNJPTranslationRepository = require("../repositories/VNJPTranslationRepository")
class VocabularyModel {

    /**
     * 
     * @param {object} params The parameters need to create process
     * @returns Return response data 
     */
    create = async (params) => {
        if (!params) {
            return new Response(LESSON_MODEL_CONST.PARAM_CREATE_IS_NULL_MESSAGE, true).getResponse();
        }

        if (!params.LessonId || typeof params.LessonId !== "number" || params.LessonId === 0) {
            return new Response(LESSON_MODEL_CONST.PARAM_CREATE_IS_NOT_VALID, true).getResponse();
        }

        if (!params.TranslationId) {
            // check id valid
            const row = await VNJPTranslationRepository.getById(params.TranslationId);
            return row;
        }
    }
}

module.exports = new VocabularyModel()