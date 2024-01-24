const { isValidDate } = require("../commons/utils/Validate");

/**
 * Handle actions to lesson table
 */
class LessonRepository {
    constructor(db_connection) {
        this.connection = db_connection;
    }

    /**
     * 
     * @param {object} params The parameters need to insert process 
     * @returns Return The query return value
     */
    create = async(params) => {
        if (!params) {
            throw new Error("Parameters can not be null!");
        }

        if ((!params.LessonNameVN || typeof params.LessonNameVN !== "string" || params.LessonNameVN.trim().length === 0) || 
            (!params.CreatedDate || typeof params.CreatedDate !== "string" || isValidDate(params.CreatedDate) === false)) {
            throw new Error("Insert values is invalid!");
        }

        try {
            const query = "INSERT INTO lesson SET ?";
            const [row, field] = await this.connection.query(query, this.#prepareValuesInsert(params))
            
            return row;
        } catch (error) {
            throw error;
        }

    }

    #prepareValuesInsert(params){
        const values = {}

        values["lesson_name_jp"] = params.LessonNameJP
        values["lesson_name_vn"] = params.LessonNameVN
        values["created_date"] = params.CreatedDate

        return values
    }

    get = async (params) => {
        if (!params) {
            throw new Error("Parameters can not be null!");
        }

        try {
            const query = `SELECT id, lesson_name_vn, lesson_name_jp FROM lesson ORDER BY created_date ASC LIMIT ${(params.page-1) * 10},100`;
            const [row, field] = await this.connection.query(query)
            
            return row;
        } catch (error) {
            throw error;
        }
    }

    getAllLessonVocabularyDataById = async (params) => {
        if (!params) {
            throw new Error("Parameters can not be null!");
        }

        try {
            const query = `SELECT 
                                  lesson_vocabulary.learning_time VocabularyLearningTime, \
                                  vn_jp_translation.id VNJPTranslationId, \
                                  vn_jp_translation.detail VNJPDetail, \
                                  vn.id VNId, \
                                  vn.vietnamese Vietnamese, \
                                  vn.sino_vietnamese SinoVietnamese, \
                                  jp.id JPId, \
                                  jp.word_kanji WordKanji, \
                                  jp.word_hiragana WordHiragana, \
                                  jp.word_katakana WordKatakana, \
                                  jp.spelling JPSpelling
                            FROM \ 
                            lesson join lesson_vocabulary ON lesson.id = lesson_vocabulary.lesson_id \
                                   join vn_jp_translation ON lesson_vocabulary.translation_id = vn_jp_translation.id \
                                   join vn ON vn_jp_translation.vn_word_id = vn.id \  
                                   join jp ON vn_jp_translation.jp_word_id = jp.id \
                            WHERE lesson.id = ? \
                            ORDER BY lesson_vocabulary.type_word asc, \
                                    lesson_vocabulary.created_date asc`;
            const [row, field] = await this.connection.query(query, params.lessonId)
            
            return row;
        } catch (error) {
            throw error;
        }
    }

    getAllLessonGrammarDataById = async (params) => {
        if (!params) {
            throw new Error("Parameters can not be null!");
        }

        try {
            const query = `SELECT 
                                lesson_grammar.id LessonGrammarId, \
                                lesson_grammar.learning_time LearningTime, \
                                grammar.id GrammarId, \
                                grammar.sentence_structure SentenceStructure, \
                                grammar.meaning Meaning, \
                                grammar_example.id GrammarExampleId, \
                                grammar_example.example_sentence ExampleSentence, \
                                grammar_example.vietnamese GrammarExampleVietnamese
                            FROM \ 
                            lesson join lesson_grammar ON lesson.id = lesson_grammar.lesson_id \
                                   join grammar ON lesson_grammar.grammar_id = grammar.id \
                                   join grammar_example ON grammar_example.id = grammar.grammar_example_id \  
                            WHERE lesson.id = ? \
                            ORDER BY lesson_grammar.learning_time asc`;
            const [row, field] = await this.connection.query(query, params.lessonId)
            
            return row;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = LessonRepository