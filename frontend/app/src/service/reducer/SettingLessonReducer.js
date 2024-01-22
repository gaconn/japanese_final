import { createSlice } from "@reduxjs/toolkit";

const SettingLessonSlice = createSlice({
    name: 'settingLesson',
    initialState: {
        lessonData: {},
        isLoading: false,
        isReload: false,

    },
    reducers: {
        loadLessonData: (state, action) => {
            state.lessonData = action.data.payload
        }
    }
})

export const {loadLessonData} = SettingLessonSlice.actions
export default SettingLessonSlice.reducer