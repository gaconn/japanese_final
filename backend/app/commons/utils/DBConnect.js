const mysql2 = require("mysql2/promise");
require("dotenv").config();

var connection = null;

function getPoolConnect() {
    let host = process.env.DB_HOST;
    let user = process.env.DB_ROOT_USER;
    let db = process.env.DB_NAME;
    let pwd = process.env.DB_PASSWORD;
    let port = process.env.DB_PORT;

    connection = mysql2.createPool({
        host: host,
        user: user,
        database: db,
        password: pwd,
        port: port,
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
        idleTimeout: 30000, // idle connections timeout, in milliseconds, the default value 60000
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0
    })
}
getPoolConnect()

module.exports = connection