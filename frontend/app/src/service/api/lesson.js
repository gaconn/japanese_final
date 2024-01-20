import axios from "axios"
const CREATE_LESSON_ROUTE = "lesson/create"

export const createLesson = async(lesson) => {
    try {
        const result = await axios.post(process.env.REACT_APP_API_HOST + CREATE_LESSON_ROUTE, lesson)
        return result
    } catch (error) {
        console.log(error);
    }
}