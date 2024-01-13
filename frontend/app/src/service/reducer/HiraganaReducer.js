import { createSlice } from "@reduxjs/toolkit"
import { Hiragana } from "../../common/constant/Const"

export const hiraganaAlphabetSlice = createSlice({
    name: "hiraganaAlphabet",
    initialState: {
        objHiragana: {},
        typeLoad: Hiragana.TYPE_LOAD_ALL
    },
    reducers: {
        loadData: (state, action) => {
            state.objHiragana = action.payload
        },
        setTypeLoad: (state, action) => {
            state.typeLoad = action.payload
        }
    }
})
export const {loadData, setTypeLoad} = hiraganaAlphabetSlice.actions
export default hiraganaAlphabetSlice.reducer