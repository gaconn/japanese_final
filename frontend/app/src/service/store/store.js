import {configureStore} from "@reduxjs/toolkit"
import HiraganaReducer from "../reducer/HiraganaReducer"
import KatakanaReducer from "../reducer/KatakanaReducer"
import ExerciseReducer from "../reducer/ExerciseReducer"
import AddLessonReducer from "../reducer/AddLessonReducer"
import LoadLessonReducer from "../reducer/LoadLessonReducer"
import SettingLessonReducer from "../reducer/SettingLessonReducer"

export default configureStore({
    reducer: {
        hiraganaAlphabet: HiraganaReducer,
        katakanaAlphabet: KatakanaReducer,
        exercise: ExerciseReducer,
        addLesson: AddLessonReducer,
        loadLesson: LoadLessonReducer,
        settingLesson: SettingLessonReducer
    }
})