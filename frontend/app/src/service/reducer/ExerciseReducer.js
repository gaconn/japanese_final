import { createSlice } from "@reduxjs/toolkit";

export const ExerciseSlice = createSlice({
    name: "exercise",
    initialState: {
        question: "",
        answer: "",
        listFakeAnswer: {},
        reload: true,
        typeQuestion: 3,
        numberQuestion: 0,
        numberCorrectAnswer: 0,
    },
    reducers: {
        loadQuestion: (state, action) => {
            state.question = action.payload.question
            state.answer = action.payload.answer
            state.listFakeAnswer = action.payload.listFakeAnswer
            state.reload = false
        },
        setReload: (state, action) => {
            state.reload = action.payload
        },
        setTypeQuestion: (state, action) => {
            state.typeQuestion = action.payload
            state.reload = true
        },
        checkAnswer: (state, action) => {
            if (state.answer === action.payload) {
                state.numberQuestion ++
                state.numberCorrectAnswer ++
                state.reload = true
            } else {
                // xử lý chọn sai
            }
        }
    }
})

export const {loadQuestion, setReload, setTypeQuestion, checkAnswer} = ExerciseSlice.actions
export default ExerciseSlice.reducer