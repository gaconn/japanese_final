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
            const lessonRepository = new LessonRepository(connection)
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
}

module.exports = new LessonModel();