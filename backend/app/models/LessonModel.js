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
            const row = await LessonRepository.create(params)
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

module.exports = new LessonModel();