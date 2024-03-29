import axios from "axios"
const CREATE_LESSON_ROUTE = "lesson/create"
const GET_LESSONS_ROUTE = "lesson/get_all"
const GET_ALL_DATA_LESSON_BY_ID = "lesson/load_all_data_by_id"
const ADD_NEW_WORD_TO_LESSON = "vocabulary/add-new-to-lesson"

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

export const loadAllDataLesson = async (lessonId) => {
    try {
        const result = await axios.get(process.env.REACT_APP_API_HOST + GET_ALL_DATA_LESSON_BY_ID, {params: {lessonId}})
        return result
    } catch (error) {
        console.log(error);
    }
}

export const addNewWordToLesson = async (data) => {
    try {
        const result = await axios.post(process.env.REACT_APP_API_HOST + ADD_NEW_WORD_TO_LESSON, data)
        return result
    } catch (error) {
        console.log(error);
    }
}