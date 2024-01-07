const { VOCABULARY_TYPE_WORD } = require("../commons/constants/Constant");

class LessonVocabularyRepository {
    constructor(db_connection) {
        this.connection = db_connection
    }

    create = async (params) => {
        if (!params) {
            throw new Error("Parameters can not be null or empty")
        }

        if (!params.TranslationId || !params.LessonId || !params.LearningTime || !VOCABULARY_TYPE_WORD.hasOwnProperty(params.TypeWord)) {
            throw new Error("Parameters invalid")
        }

        try {
            const query = "INSERT INTO lesson_vocabulary SET ?";
            const [row, field] = await this.connection.query(query, this.#prepareValuesInsert(params))
            return row
        } catch (error) {
            throw error
        }
    }

    #prepareValuesInsert(params){
        const values = {}

        values["lesson_id"] = params.LessonId
        values["translation_id"] = params.TranslationId
        values["learning_time"] = params.LearningTime
        values["type_word"] = params.TypeWord
        values["created_date"] = params.CreatedDate

        return values
    }
}

module.exports = LessonVocabularyRepository;