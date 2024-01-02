const { getPoolConnect } = require("../commons/utils/DBConnect")

class VocabularyModel {
    constructor(db_connection) {
        this.connection = db_connection
    }

    create = (params) => {
        if (!params) {
            return new Response(LESSON_MODEL_CONST.PARAM_CREATE_IS_NULL_MESSAGE, true).getResponse();
        }

        if (!params.LessonId || typeof params.LessonId !== "number" || params.LessonId === 0) {
            return new Response(LESSON_MODEL_CONST.PARAM_CREATE_IS_NOT_VALID, true).getResponse();
        }
    }
}

module.exports = new VocabularyModel(getPoolConnect())