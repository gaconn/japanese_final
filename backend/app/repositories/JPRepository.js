const { TYPE_WORD } = require("../commons/constants/Constant")

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
            const [row, field] = await this.connection.query(query, this.#prepareValuesInsert(params))
            return row
        } catch (error) {
            throw error
        }
    }

    #prepareValuesInsert(params){
        const values = {}
        if (params.TypeWord === TYPE_WORD.TYPE_WORD_KANJI) {
            values["word_kanji"] = params.WordKanji
        } 

        if (params.TypeWord === TYPE_WORD.TYPE_WORD_HIRAGANA) {
            values["word_hiragana"] = params.WordHiragana
        }

        if (params.TypeWord === TYPE_WORD.TYPE_WORD_KATAKANA) {
            values["word_katakana"] = params.WordKatakana
        }

        values["spelling"] = params.Spelling

        return values
    }
}

module.exports = JPRepository