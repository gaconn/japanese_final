class Response{
    constructor(message = null, isError = null) {
        this.message = message;
        this.isError = isError;
    }

    setMessage = (message) => {
        this.message = message
    }

    setIsError = (isError) => {
        this.isError = isError
    }

    setData = (data) => {
        this.data = data
    }

    getResponse = () => {
        return {
            message: this.message,
            isError: this.isError,
            data: this.data
        }
    }
}

module.exports = Response;