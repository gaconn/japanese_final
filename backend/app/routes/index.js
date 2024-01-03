const lessonRouter = require("./lessonRouter")
const vocabularyRouter = require("./vocabularyRouter")

/**
 * Construct routes
 * @param {any} app core.Express return from express() 
 */
function routes(app) {
    app.use("/lesson", lessonRouter)
    app.use("/vocabulary", vocabularyRouter)
}

module.exports = routes