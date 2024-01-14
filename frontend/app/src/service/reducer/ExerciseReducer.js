import { createSlice } from "@reduxjs/toolkit";

export const ExerciseSlice = createSlice({
    name: "exercise",
    initialState: {
        question: "",
        answer: "",
        listAnswer: {},
        reload: true
    },
    reducers: {
        loadQuestion: (state, action) => {
            state.question = action.payload.action
            state.answer = action.payload.answer
            state.listAnswer = action.listAnswer
        },
        setReload: (state, action) => {
            state.reload = action.payload
        }
    }
})

export const {loadQuestion, setReload} = ExerciseSlice.actions
export default ExerciseSlice.reducer