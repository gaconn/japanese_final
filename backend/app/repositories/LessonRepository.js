const { LESSON_MODEL_CONST } = require("../commons/constants/LessonConstant");
const { getPoolConnect } = require("../commons/utils/DBConnect");
const { isValidDate } = require("../commons/utils/Validate");

/**
 * Handle connect to lesson table in database
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
            const query = "INSERT INTO lesson(lesson_name_jp, lesson_name_vn, created_date) VALUES (?,?,?)";
            const [row, field] = await this.connection.query(query, [params.LessonNameJP, params.LessonNameVN, params.CreatedDate])
            
            return row;
        } catch (error) {
            throw error;
        }

    }
}

module.exports = new LessonRepository(getPoolConnect())