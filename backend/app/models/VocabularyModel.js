const { MESSAGE } = require("../commons/constants/Constant");
const Response = require("../commons/utils/Response");
const { isValidDate } = require("../commons/utils/Validate");
const LessonVocabularyRepository = require("../repositories/LessonVocabularyRepository");
const VNJPTranslationRepository = require("../repositories/VNJPTranslationRepository");
const VNRepository = require("../repositories/VNRepository");
const connection = require("../commons/utils/DBConnect");
const JPRepository = require("../repositories/JPRepository");
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

        if (params.TypeWord === null || params.TypeWord === undefined || !VOCABULARY_TYPE_WORD.hasOwnProperty(params.TypeWord)) {
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
            const vnJPTranslationRepository = new VNJPTranslationRepository(connection)
            const row = await vnJPTranslationRepository.getById(params.TranslationId);
            if (row.length === 0) {
                return new Response("TranslationId is not exist", true);
            }

            const lessonVocabularyRepository = new LessonVocabularyRepository(connection)
            const insertResult = await lessonVocabularyRepository.create(params)
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

        const transaction = await connection.beginTransaction()
        try {
            // add to vn
            const vnRepository = new VNRepository(transaction)
            const vnResult = await vnRepository.create(params)
            if (vnResult.affectedRows === 0) {
                throw new Error("create new vn word fail!")
            }

            // add to jp
            const jpRepository = new JPRepository(transaction)
            const jpResult = await jpRepository.create(params)
            if (jpResult.affectedRows === 0) {
                throw new Error("create new jp word fail!")
            }

            // add to vn_jp_translation
            const vnJPTranslationRepository = new VNJPTranslationRepository(transaction)
            const vnJPTranslationResult = await vnJPTranslationRepository.create(params)
            if (vnJPTranslationResult.affectedRows === 0) {
                throw new Error("create new vn_jp_translation fail!")
            }

            // add to lesson_vocabulary
            const lessonVocabularyRepository = new LessonVocabularyRepository(transaction)
            const paramsAddLessonVocabulary = {
                LessonId: params.LessonId,
                TranslationId: vnJPTranslationResult.ResultId,
                LearningTime: params.LearningTime,
                TypeWord: params.TypeWord,
                CreatedDate: new Date().toISOString().split("T")[0]
            }
            const lessonVocabularyResult = await lessonVocabularyRepository.create(paramsAddLessonVocabulary)
            if (lessonVocabularyResult.affectedRows === 0) {
                throw new Error("create new lesson_vocabulary fail!")
            }
            transaction.commit()
            
            return new Response({
                LessonVocabularyId: lessonVocabularyResult.InsertId,
                TranslationId: vnJPTranslationResult.InsertId
            }, [])
        } catch (error) {
            await transaction.rollback()
            return error
        }
    }
}

module.exports = new VocabularyModel()