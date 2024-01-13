import {configureStore} from "@reduxjs/toolkit"
import HiraganaReducer from "../reducer/HiraganaReducer"

export default configureStore({
    reducer: {
        hiraganaAlphabet: HiraganaReducer
    }
})