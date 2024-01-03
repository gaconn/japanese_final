const { getPoolConnect } = require("../commons/utils/DBConnect")

class LessonVocabularyRepository {
    constructor(db_connection) {
        this.connection = db_connection
    }


}

module.exports = new LessonVocabularyRepository(getPoolConnect());