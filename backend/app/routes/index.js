const lessonRouter = require("./lessonRouter")
function routes(app) {
    app.use("/lesson", lessonRouter)
}

module.exports = routes