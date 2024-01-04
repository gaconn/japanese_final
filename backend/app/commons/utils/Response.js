class Response{
    constructor(data, listError = []) {
        if ((listError instanceof Array)) {
            this.data = data;
            this.errors = listError;
        } else {
            this.data = data
            this.errors = []
        }
    }

    setErrors = (listError) => {
        if (!(listError instanceof Array)) {
            throw new Error("List error must be array")
        }
        
        for (const key in listError) {
            if (!(key instanceof Error)) {
                throw new Error("Array contains an item that is not an instance of Error")
            }
        }
        this.errors = listError
    }

    addError = (error) => {
        if (!(error instanceof Error)) {
            throw new Error("Parameters must be an instance of Error")
        }
        this.errors.push(error)
    }

    setData = (data) => {
        this.data = data
    }

    getResponse = () => {
        return {
            data: this.data,
            errors: this.errors
        }
    }
}

module.exports = Response;