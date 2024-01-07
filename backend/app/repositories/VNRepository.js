class VNRepository {
    constructor(db_connection) {
        this.connection = db_connection
    }

    create = async(params) => {
        if (!params) {
            throw new Error("Parameters is null")
        }

        if (!params.Vietnamese) {
            throw new Error("Parameters invalid")
        }

        try {
            const query = "INSERT INTO vn SET ?";
            const [row, field] = await this.connection.query(query, this.#prepareValuesInsert(params))
            return row
        } catch (error) {
            throw error
        }
    }

    #prepareValuesInsert(params){
        const values = {}

        values["vietnamese"] = params.Vietnamese
        if (params.SinoVietnamese) {
            values["sino_vietnamese"] = params.SinoVietnamese 
        }

        return values
    }
}

module.exports = VNRepository