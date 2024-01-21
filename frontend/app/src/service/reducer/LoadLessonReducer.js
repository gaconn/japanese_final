import { createSlice } from "@reduxjs/toolkit";

export const LoadLessonSlice = createSlice({
    name: 'loadLesson',
    initialState: {
        lessons: [],
        isReload: true,
        isLoading: true,
        pageNumber: 1
    },
    reducers: {
        loadLessonReducer: (state, action) => {
            state.lessons = action.payload
        },
        setIsReload: (state, action) => {
            state.isReload = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }, 
        setPageNumber: (state) => {
            state.pageNumber += 1
        }
    }
})

export const {loadLessonReducer, setIsReload, setIsLoading, setPageNumber}  = LoadLessonSlice.actions
export default LoadLessonSlice.reducer