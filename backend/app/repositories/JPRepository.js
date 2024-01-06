class JPRepository {
    constructor(db_connection) {
        this.connection = db_connection
    }

    create = async (params) => {
        if (!params) {
            throw new Error("Parameters is null")
        }

        try {
            const query = "INSERT INTO jp SET ?"
            const [row, field] = await this.connection.query(query, this.prepareValuesInsert(params))
            return row
        } catch (error) {
            throw error
        }
    }

    [prepareValuesInsert] = (params) => {
        const values = {}
        if (params.WordKanji) {
            values["word_kanji"] = params.WordKanji
        } 

        if (params.WordHiragana) {
            values["word_hiragana"] = params.WordHiragana
        }

        if (params.WordKatakana) {
            values["word_katakana"] = params.WordKatakana
        }

        return values
    }
}

module.exports = JPRepository