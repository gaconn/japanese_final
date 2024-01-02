const {getPoolConnect} = require("../commons/utils/DBConnect")
const Response = require("../commons/utils/Response")
const {LESSON_MODEL_CONST} = require("../commons/constants/LessonConstant");
const { isValidDate } = require("../commons/utils/Validate");
class LessonModel {
    constructor(db_connection) {
        this.connection = db_connection;
    }

    create = async(params) => {
        if (!params) {
            return new Response(LESSON_MODEL_CONST.PARAM_CREATE_IS_NULL_MESSAGE, true).getResponse();
        }

        if ((!params.LessonNameVN || typeof params.LessonNameVN !== "string" || params.LessonNameVN.trim().length === 0) || 
            (!params.CreatedDate || typeof params.CreatedDate !== "string" || isValidDate(params.CreatedDate) === false)) {
            return new Response(LESSON_MODEL_CONST.PARAM_CREATE_IS_NOT_VALID, true).getResponse();
        }

        try {
            const query = "INSERT INTO lesson(lesson_name_jp, lesson_name_vn, created_date) VALUES (?,?,?)";
            const [row, field] = await this.connection.query(query, [params.LessonNameJP, params.LessonNameVN, params.CreatedDate])
            if (row.affectedRows != 0) {
                const response = new Response(LESSON_MODEL_CONST.MESSAGE_INSERT_LESSON_SUCCESS, false);
                response.setData({insertId: row.insertId});
                return response.getResponse();
            }
            return new Response(LESSON_MODEL_CONST.MESSAGE_INSERT_LESSON_UNSUCCESS, true).getResponse();
        } catch (error) {
            return new Response(error.message, true).getResponse();
        }

    }
}

module.exports = new LessonModel(getPoolConnect());