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
            const query = "INSERT INTO vn_jp_translation SET ?"
            const [row, field] = await this.connection.query(query, this.#prepareValuesInsert(params))
            return row
        } catch (error) {
            throw error
        }
    }

    #prepareValuesInsert(params){
        const values = {}

        values["vn_word_id"] = params.VNWordId
        values["jp_word_id"] = params.JPWordId
        if (params.Detail) {
            values["detail"] = params.Detail
        }

        return values
    }
}

module.exports = VNJPTranslationRepository;