const { MESSAGE } = require("../commons/constants/Constant");
const connection = require("../commons/utils/DBConnect");
const Response = require("../commons/utils/Response");
const LessonRepository = require("../repositories/LessonRepository")
class LessonModel {

    /**
     * Create new lesson
     * @param {object} params The parameters need to create process
     * @returns Return response data 
     */
    create = async(params) => {
        // kiểm tra dữ liệu đầu vào
        // check dữ liệu độc hại ...

        //thêm dữ liệu
        try {
            const dbConnection = await connection.getConnection()
            const lessonRepository = new LessonRepository(dbConnection)
            const row = await lessonRepository.create(params)
            if (row.affectedRows != 0) {
                const response = new Response({insertId: row.insertId}, []);
                return response.getResponse();
            }
            return new Response([], [new Error(MESSAGE.ERROR_MESSAGE_INSERT_LESSON_UNSUCCESS)]).getResponse();
        } catch (error) {
            return new Response([], [error]).getResponse();
        }
    }

    getAll = async(params) => {
        var page 
        if (params.page && typeof parseInt(params.page) === "number") {
            page = params.page
        } else {
            page = 1
        }
        try {
            const dbConnection = await connection.getConnection()
            const lessonRepository = new LessonRepository(dbConnection)
            const row = await lessonRepository.get({page})
            return new Response(row, []).getResponse();
        } catch (error) {
            return new Response([], [error]).getResponse();
        }
    }

    getAllLessonDataById = async(params) => {
        if (!params.lessonId || typeof parseInt(params.lessonId) !== "number") {
            return new Response([], [new Error("lessonId invalid")]).getResponse();
        }

        try {
            const dbConnection = await connection.getConnection()
            const lessonRepository = new LessonRepository(dbConnection)
            
        } catch (error) {
            
        }
    }
}

module.exports = new LessonModel();