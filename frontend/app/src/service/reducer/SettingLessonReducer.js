import { createSlice } from "@reduxjs/toolkit";

const SettingLessonSlice = createSlice({
    name: 'settingLesson',
    initialState: {
        lessonData: {},
        isLoading: false,
        isReload: true,
        isSubmitProcess: false,
        newWord: {
            LessonId: '',
            TypeWord: '',
            WordJapanese: '',
            Spelling: '',
            Vietnamese: '',
            LearningTime: new Date().toISOString().substring(0,10)
        }
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
        },
        setIsSubmitProcess: (state, action) => {
            state.isSubmitProcess = action.payload
        }
    }
})

export const {loadLessonData, setIsLoading, setIsReload, setNewWord, setIsSubmitProcess} = SettingLessonSlice.actions
export default SettingLessonSlice.reducer