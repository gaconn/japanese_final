const { getPoolConnect } = require("../commons/utils/DBConnect")

class JPRepository {
    constructor(db_connection) {
        this.connection = db_connection
    }

    create = async (params) => {
        if (!params) {
            throw new Error("Parameters is null")
        }

        try {
            const query = "INSERT INTO jp(word_kanji, word_hiragana, word_katakana) VALUES(?)"
            const [row, field] = await this.connection.query(query, [params.WordKanji, params.WordHiragana, params.WordKatakana])
            return row
        } catch (error) {
            throw error
        }
    }
}

module.exports = new JPRepository(getPoolConnect())