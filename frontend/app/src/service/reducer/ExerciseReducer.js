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
        incorrectNoti: false,
        isSuggest: false,
        isNoti: false,
        incorrectAnswerCount: 0
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
                state.isNoti = true
                state.numberQuestion ++
                state.numberCorrectAnswer ++
                state.reload = true
            } else {
                state.incorrectAnswerCount += 1
                if (state.incorrectAnswerCount >= 3) {
                    state.incorrectNoti = true
                    state.isNoti = true 
                    state.numberQuestion ++
                    state.reload = true
                    state.incorrectAnswerCount = 0
                } else {
                    state.isNoti = true
                    state.incorrectNoti = true
                }
            }
        },
        setCorrectNoti: (state, action) => {
            state.correctNoti = action.payload
            if (action.payload === false) {
                state.isNoti = false
            }
        },
        setIncorrectNoti: (state, action) => {
            state.incorrectNoti = action.payload
            if (action.payload === false) {
                state.isNoti = false
            }
        },
        setSuggestedData: (state, action) => {
            state.listFakeAnswer = action.payload
            state.isSuggest = false
        },
        setIsSuggest: (state, action) => {
            state.isSuggest = action.payload
        }
    }
})

export const {
                loadQuestion, setReload, setTypeQuestion, checkAnswer, 
                setCorrectNoti, setIncorrectNoti, setSuggestedData,
                setIsSuggest
            } = ExerciseSlice.actions
export default ExerciseSlice.reducer