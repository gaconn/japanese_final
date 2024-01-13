import { createSlice } from "@reduxjs/toolkit";
import { Katakana } from "../../common/constant/Const";

export const KatakanaAlphabetSlice = createSlice({
    name: "katakanaAlphabet",
    initialState: {
        objKatakana: {},
        typeLoad: Katakana.TYPE_LOAD_ALL
    },
    reducers: {
        loadData: (state, action) => {
            state.objKatakana = action.payload
        },
        setTypeLoad: (state, action) => {
            state.typeLoad = action.payload
        }
    }
})

export const {loadData, setTypeLoad} = KatakanaAlphabetSlice.actions
export default KatakanaAlphabetSlice.reducer