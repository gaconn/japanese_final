class LessonVocabularyRepository {
    constructor(db_connection) {
        this.connection = db_connection
    }

    create = async (params) => {
        if (!params) {
            throw new Error("Parameters can not be null or empty")
        }

        try {
            const query = "INSERT INTO lesson_vocabulary SET ?";
            const [row, field] = this.connection.query(query, this.parepareValuesInsert(params))
            return row
        } catch (error) {
            throw error
        }
    }

    [parepareValuesInsert] = (params) => {
        const values = {}

        values["lesson_id"] = params.LessonId
        values["translation_id"] = params.TranslationId
        values["learning_time"] = params.LearningTime
        values["type_word"] = params.TypeWord
        values["created_date"] = now.toISOString().split("T")[0]

        return values
    }
}

module.exports = LessonVocabularyRepository;