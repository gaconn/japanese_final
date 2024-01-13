import {configureStore} from "@reduxjs/toolkit"
import HiraganaReducer from "../reducer/HiraganaReducer"
import KatakanaReducer from "../reducer/KatakanaReducer"

export default configureStore({
    reducer: {
        hiraganaAlphabet: HiraganaReducer,
        katakanaAlphabet: KatakanaReducer
    }
})