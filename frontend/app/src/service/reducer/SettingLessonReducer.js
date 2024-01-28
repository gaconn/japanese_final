import { createSlice } from "@reduxjs/toolkit";

const SettingLessonSlice = createSlice({
    name: 'settingLesson',
    initialState: {
        lessonData: {},
        isLoading: false,
        isReload: false,
        newWord: {}
    },
    reducers: {
        loadLessonData: (state, action) => {
            state.lessonData = action.payload
        }, 
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setIsReload: (state, action) => {
            state.isReload = action.payload
        },
        setNewWord: (state, action) => {
            state.newWord = action.payload
        }
    }
})

export const {loadLessonData, setIsLoading, setIsReload, setNewWord} = SettingLessonSlice.actions
export default SettingLessonSlice.reducer