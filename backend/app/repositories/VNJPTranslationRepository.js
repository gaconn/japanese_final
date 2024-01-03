const { getPoolConnect } = require("../commons/utils/DBConnect");

/**
 * Handle actions to vn_jp_translation
 */
class VNJPTranslationRepository {
    constructor(db_connection) {
        this.connection = db_connection;
    }

    getById = async (id) => {
        if (!id || typeof id !== "number") {
            return null;
        }

        const query = "SELECT id VNJPTranslationId,\
                        vn_word_id VNWordId,\
                        jp_word_id JPWordId,\
                        detail Detail \
                        FROM vn_jp_translation \
                        WHERE id = ?";
        const [row, field] = await this.connection.query(query, [id]);
        return row;
    }
}

module.exports = new VNJPTranslationRepository(getPoolConnect());