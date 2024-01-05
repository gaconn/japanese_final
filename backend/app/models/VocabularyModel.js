const { MESSAGE } = require("../commons/constants/Constant");
const Response = require("../commons/utils/Response");
const { isValidDate } = require("../commons/utils/Validate");
const LessonVocabularyRepository = require("../repositories/LessonVocabularyRepository");
const VNJPTranslationRepository = require("../repositories/VNJPTranslationRepository");
const VNRepository = require("../repositories/VNRepository");
class VocabularyModel {

    /**
     * 
     * @param {object} params The parameters need to create process
     * @returns Return response data 
     */
    createByTranslationId = async (params) => {
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
        
        if (!params.TranslationId || typeof params.TranslationId !== "number" || params.TranslationId === 0) {
            errors.push(new Error("TranslationId is requrie and could be number > 0"))
        }

        if (errors.length > 0) {
            return new Response([], errors)
        }

        // check id valid
        try {
            const row = await VNJPTranslationRepository.getById(params.TranslationId);
            if (row.length === 0) {
                return new Response("TranslationId is not exist", true);
            }

            const insertResult = await LessonVocabularyRepository.create(params)
            if (insertResult.affectedRows != 0) {
                return new Response({insertId: insertResult.insertId, success: true}, [])
            }
            return new Response({success: false}, []);
        } catch (error) {
            return new Response([], [error])
        }
    }

    createNewWordAndAddToLesson = async(params) => {
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

        if (!params.Vietnamese || typeof params.Vietnamese !== "string" || params.Vietnamese.trim().length === 0) {
            errors.push(new Error("Vietnamese is require"))
        }

        if (params.TypeWord === 0 && !(!params.WordHiragana && !params.WordKatakana)) {
            errors.push(new Error("When TypeWord equal to 0, WordHiragana or WordKatakana can not be null"))
        } else if (params.TypeWord === 1 && !params.WordKanji) {
            errors.push(new Error("When TypeWord equal to 1, WordKanji can not be null"))
        }

        if (errors.length > 0) {
            return new Response([], errors)
        }

        try {
            // add to vn
            const vnResult = await VNRepository.create(params)
            
        } catch (error) {
            
        }
    }
}

module.exports = new VocabularyModel()