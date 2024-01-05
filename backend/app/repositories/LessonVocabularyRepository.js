const { getPoolConnect } = require("../commons/utils/DBConnect")

class LessonVocabularyRepository {
    constructor(db_connection) {
        this.connection = db_connection
    }

    create = async (params) => {
        if (!params) {
            throw new Error("Parameters can not be null or empty")
        }

        try {
            const query = "INSERT INTO lesson_vocabulary(lesson_id, translation_id, learning_time, type_word, created_date)\
                            VALUES(?)";
            var now = new Date();
            var createdDate = now.toISOString().split("T")[0]
            const [row, field] = this.connection.query(query, [params.LessonId, params.TranslationId, params.LearningTime, params.TypeWord, createdDate])
            return row
        } catch (error) {
            throw error
        }
    }
}

module.exports = new LessonVocabularyRepository(getPoolConnect());