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

    create = async (params) => {
        if (!params) {
            throw new Error("Parameters is null")
        }
        
        if (!params.VNWordId || !params.JPWordId) {
            throw new Error("Params is invalid")
        }

        try {
            const query = "INSERT INTO vn_jp_translation(vn_word_id, jp_word_id, detail) VALUES(?)"
            const [row, field] = await this.connection.query(query, [params.VNWordId, params.JPWordId, params.Detail])
            return row
        } catch (error) {
            throw error
        }
    }
}

module.exports = new VNJPTranslationRepository(getPoolConnect());