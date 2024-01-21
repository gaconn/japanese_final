import axios from "axios"
const CREATE_LESSON_ROUTE = "lesson/create"
const GET_LESSONS_ROUTE = "lesson/get_all"

export const createLesson = async(lesson) => {
    try {
        const result = await axios.post(process.env.REACT_APP_API_HOST + CREATE_LESSON_ROUTE, lesson)
        return result
    } catch (error) {
        console.log(error);
    }
}

export const loadLessons = async() => {
    try {
        const result = await axios.get(process.env.REACT_APP_API_HOST + GET_LESSONS_ROUTE)
        return result
    } catch (error) {
        console.log(error);
    }
}