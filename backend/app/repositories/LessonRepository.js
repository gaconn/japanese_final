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
            const query = `SELECT id, lesson_name_vn, lesson_name_jp FROM lesson ORDER BY created_date ASC LIMIT ${(params.page-1) * 10},10`;
            const [row, field] = await this.connection.query(query)
            
            return row;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = LessonRepository