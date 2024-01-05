const { getPoolConnect } = require("../commons/utils/DBConnect");

class VNRepository {
    constructor(db_connection) {
        this.connection = db_connection
    }

    create = async(params) => {
        if (!params) {
            throw new Error("Parameters is null")
        }

        try {
            const query = "INSERT INTO vn(vietnamese, sino_vietnamese) VALUES(?)";
            const [row, field] = await this.connection.query(query, [params.Vietnamese, params.SinoVietnamese])
            return row
        } catch (error) {
            throw error
        }
    }
}

module.exports = new VNRepository(getPoolConnect())