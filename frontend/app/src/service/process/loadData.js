import { Exercise, Hiragana } from "../../common/constant/Const"

const LOAD_HIRAGANA = 0
const LOAD_KATAKANA = 1
const LOAD_214KANJI_STROKE = 2
const HIRAGANA_DATA_DIR = "/data/hiragana.json"
const KATAKANA_DATA_DIR = "/data/katakana.json"
const KANJISTROKE_DATA_DIR = "/data/214kanji.json"
const RATIO_WORD_BASE = 50
const RATIO_WORD_COMBINE = 80
const RATIO_WORD_TENTEN = 15
const RATIO_WORD_MARU = 5

const loadAlphabetData = async (type) => {
    var strDir
    if (type === LOAD_HIRAGANA) {
        strDir = HIRAGANA_DATA_DIR
    } else if (type === LOAD_KATAKANA) {
        strDir = KATAKANA_DATA_DIR
    } else if (type === LOAD_214KANJI_STROKE) {
        strDir = KANJISTROKE_DATA_DIR
    } else {
        throw new Error("Type of data not valid")
    }

    const response = await fetch(strDir)
    if (!response.ok) {
        throw new Error("Fetch data fail");
    }
    const data = await response.json()
    return data
}

export const loadQuestionHiraganaData = async(questionType = 2) => {
    const response = await fetch(HIRAGANA_DATA_DIR)
    if (!response.ok) {
        throw new Error("Fetch data fail");
    }
    const data = await response.json()

    const randomNumber = Math.floor(Math.random()*100)
    var rangeData 
    if (randomNumber >= 0 && randomNumber <= RATIO_WORD_BASE) {
        rangeData = data[Hiragana.HIRAGANA_OBJ_KEY_COMMON]
    } else if (randomNumber > RATIO_WORD_BASE && randomNumber <= RATIO_WORD_COMBINE) {
        rangeData = data[Hiragana.HIRAGANA_OBJ_KEY_COMBINE]
    } else if (randomNumber > RATIO_WORD_COMBINE && randomNumber <= RATIO_WORD_TENTEN) {
        rangeData = data[Hiragana.HIRAGANA_OBJ_KEY_TENTEN]
    } else {
        rangeData = data[Hiragana.HIRAGANA_OBJ_KEY_MARU]
    }
    
    var rangeKeys
    var spelling
    var word
    
    while (true) {
        rangeKeys = Object.keys(rangeData)
        spelling = rangeKeys[Math.floor(Math.random() * rangeKeys.length)]
        if (rangeData[spelling] === null) continue
        word = rangeData[spelling]
        break
    }
    var objFakeAnswer = {}
    var count = 0
    if (questionType === Exercise.QUESTION_TYPE_RANDOM) {
        var random = Math.ceil(Math.random() * 2)
        if (random === Exercise.QUESTION_TYPE_VI_JP) {
            questionType = Exercise.QUESTION_TYPE_VI_JP
            objFakeAnswer[spelling] = word
        } else {
            questionType = Exercise.QUESTION_TYPE_JP_VI
            objFakeAnswer[word] = `/${spelling}/` 
        }
    } else {
        if (questionType === Exercise.QUESTION_TYPE_VI_JP) {
            objFakeAnswer[spelling] = word
        } else {
            objFakeAnswer[word] = `/${spelling}/` 
        }
    }

    while (true) {
        var fakeSpelling = rangeKeys[Math.floor(Math.random() * rangeKeys.length)]
        if (fakeSpelling !== spelling && !objFakeAnswer[fakeSpelling]) {
            if (rangeData[fakeSpelling] === null) continue
            if (questionType === Exercise.QUESTION_TYPE_VI_JP) {
                objFakeAnswer[fakeSpelling] = rangeData[fakeSpelling]
            } else if (questionType === Exercise.QUESTION_TYPE_JP_VI) {
                objFakeAnswer[rangeData[fakeSpelling]] = `/${fakeSpelling}/`
            }
            count ++
            if (count > 3) break
        }
    }
    

    if (questionType === Exercise.QUESTION_TYPE_VI_JP) {
        return {
            question: `/${spelling}/`,
            answer: word,
            listFakeAnswer: objFakeAnswer
        }
    } else {
        return {
            question: word,
            answer: `/${spelling}/`,
            listFakeAnswer: objFakeAnswer
        }
    } 
}

export {loadAlphabetData, LOAD_HIRAGANA, LOAD_KATAKANA, LOAD_214KANJI_STROKE}