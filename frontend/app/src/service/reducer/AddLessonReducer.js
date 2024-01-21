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
        },
        setCommittedResult: (state, action) => {
            if (action.payload.errors && action.payload.errors.length > 0) {
                state.isSuccess = false
                state.isToast = true
            } else if (action.payload.data && action.payload.data.insertId) {
                state.isSuccess = true
                state.isToast= true
            }
        },
        setIsToast: (state, action) => {
            state.isToast = action.payload
        }
    }
})

export const {setValues, setIsLoading, setIsSuccess, setCommittedResult, setIsToast} = AddLessonSlice.actions
export default AddLessonSlice.reducer