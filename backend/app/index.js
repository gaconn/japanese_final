const express = require("express");
require("dotenv").config();
const routes = require("./routes/index")
const cors = require("cors")
const app = express();
let PORT = process.env.LOCAL_SERVER_PORT ?? 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
routes(app);

app.listen(PORT, () => {
    console.log("Server start on port: ", PORT);
})