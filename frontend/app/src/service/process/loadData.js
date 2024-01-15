const LOAD_HIRAGANA = 0
const LOAD_KATAKANA = 1
const LOAD_214KANJI_STROKE = 2
const HIRAGANA_DATA_DIR = "/data/hiragana.json"
const KATAKANA_DATA_DIR = "/data/katakana.json"
const KANJISTROKE_DATA_DIR = "/data/214kanji.json"

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

const loadQuestionData = async(type, filterType) => {
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

    
}

export {loadAlphabetData, LOAD_HIRAGANA, LOAD_KATAKANA, LOAD_214KANJI_STROKE}