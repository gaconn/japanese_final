import { createSlice } from "@reduxjs/toolkit";

export const AddLessonSlice = createSlice({
    name: 'addLesson',
    initialState: {
        values: {},
        isSuccess: false,
        isToast: false,
        isLoading: false
    },
    reducers:{
        setValues: (state, action) => {
            state.values = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setIsSuccess: (state, action) => {
            state.isSuccess = action.payload
        }
    }
})

export const {setValues, setIsLoading, setIsSuccess} = AddLessonSlice.actions
export default AddLessonSlice.reducer