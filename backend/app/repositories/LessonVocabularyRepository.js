const { getPoolConnect } = require("../commons/utils/DBConnect")

class LessonVocabularyRepository {
    constructor(db_connection) {
        this.connection = db_connection
    }

    create = async (params) => {

    }
}

module.exports = new LessonVocabularyRepository(getPoolConnect());