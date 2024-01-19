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
        correctNoti: false,
        incorrectNoti: false
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
                state.correctNoti = true
                state.numberQuestion ++
                state.numberCorrectAnswer ++
                state.reload = true
            } else {
                state.incorrectNoti = true
                state.reload = true              
            }
        },
        setCorrectNoti: (state, action) => {
            state.correctNoti = action.payload
        },
        setIncorrectNoti: (state, action) => {
            state.incorrectNoti = action.payload
        }
    }
})

export const {loadQuestion, setReload, setTypeQuestion, checkAnswer, setCorrectNoti, setIncorrectNoti} = ExerciseSlice.actions
export default ExerciseSlice.reducer