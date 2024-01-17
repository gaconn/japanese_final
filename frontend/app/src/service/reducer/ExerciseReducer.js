import { createSlice } from "@reduxjs/toolkit";

export const ExerciseSlice = createSlice({
    name: "exercise",
    initialState: {
        question: "",
        answer: "",
        listFakeAnswer: {},
        reload: true,
        typeQuestion: 3
    },
    reducers: {
        loadQuestion: (state, action) => {
            state.question = action.payload.action
            state.answer = action.payload.answer
            state.listFakeAnswer = action.listFakeAnswer
            state.reload = false
        },
        setReload: (state, action) => {
            state.reload = action.payload
        },
        setTypeQuestion: (state, action) => {
            state.typeQuestion = action.payload
        }
    }
})

export const {loadQuestion, setReload, setTypeQuestion} = ExerciseSlice.actions
export default ExerciseSlice.reducer