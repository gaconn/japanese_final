const { LESSON_CONTROLLER_CONST, MESSAGE } = require("../commons/constants/Constant")
const Response = require("../commons/utils/Response")
const LessonModel = require("../models/LessonModel")

class LessonController {
    /**
     *
     * METHOD: PUT
     */
    create = async (req, res) => {
        try {
            const params = req.body
            if (!params) {
                const response = new Response([], [new Error(MESSAGE.ERROR_PARAM_CREATE_IS_NULL)])
                return res.json(response.getResponse())
            }
                
            const result = await LessonModel.create(params)
            return res.json(result)
        } catch (error) {
            const response = new Response([], [error])
            return res.json(response.getResponse())
        }
    }
    getAll = async (req, res) => {
        try {
            const query = req.query
            const result = await LessonModel.getAll(query)
            return res.json(result)
        } catch (error) {
            const response = new Response([], [error])
            return res.json(response.getResponse())
        }
    }

    loadAllDataById = async (req, res) => {
      try {
        const query = req.query
        
      } catch (error) {
        
      }
    }
}

module.exports = new LessonController()
