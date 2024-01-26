import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadAllDataLesson } from '../../../service/api/lesson'
import { useParams } from 'react-router-dom'
import { loadLessonData, setIsLoading } from '../../../service/reducer/SettingLessonReducer'

const SettingLesson = () => {
    const {lessonData, isLoading, isReload} = useSelector(state => state.settingLesson)
    const dispatch = useDispatch()
    const {lessonId} = useParams()
    useEffect(() => {
        (async() => {
            dispatch(setIsLoading(true))
            const dataRes = await loadAllDataLesson(lessonId)
            console.log(dataRes);
            if (dataRes.data.data && dataRes.data.data.vocabulary && dataRes.data.data.grammar) {
                dispatch(loadLessonData(dataRes.data.data))
            }
            dispatch(setIsLoading(false))
        })()
    }, [])
    console.log(lessonData);
  return (
    <div>
        <div className="w-full bg-white rounded-md shadow-md p-6">
            <h1 className="text-2xl font-bold mb-4">Từ vựng và cấu trúc ngữ pháp tiếng Nhật</h1>

            <div>
                <h2 className="text-lg font-semibold mb-2">Từ vựng:</h2>
                <ul>
                {
                    lessonData.vocabulary && lessonData.vocabulary.map && lessonData.vocabulary.map((word, key) => {
                        return <li className="flex items-start mb-2" key={key}>
                            <div className="mr-2">
                            <span className="text-gray-700 japanese_word">{word.TypeWord === 0 ? word.WordHiragana : (word.TypeWord === 1 ? word.WordKatakana : word.WordKanji)}</span>
                            <span className="text-sm text-gray-500">{word.TypeWord === 3 && word.WordHiragana}</span>
                            </div>
                            <div>
                            <span className="text-gray-500">{word.Vietnamese}</span>
                            {/* <p className="text-sm text-gray-500 mt-1">Ví dụ: こんにちは、元気ですか？（Xin chào, bạn khỏe không?)</p>
                            <p className="text-sm text-gray-500 mt-1">Ví dụ: こんにちは、元気ですか？（Xin chào, bạn khỏe không?)</p> */}
                            </div>
                        </li>
                    })
                }
                </ul>
            </div>

            <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">Cấu trúc ngữ pháp:</h2>
                <ul>
                    {
                        lessonData.grammar && lessonData.grammar.map && lessonData.grammar.map((grammar, key) => {
                            return (
                                <li className="flex items-start mb-2">
                                    <div className="mr-2">
                                    <span className="text-gray-700 kanji">{grammar.SentenceStructure}</span>
                                    <span className="text-sm text-gray-500">（）</span>
                                    </div>
                                    <div>
                                    <span className="text-gray-500">{grammar.Meaning}</span>
                                    <p className="text-sm text-gray-500 mt-1">Ví dụ: {grammar.ExampleSentence} - {grammar.GrammarExampleVietnamese}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            </div>
    </div>
  )
}

export default SettingLesson