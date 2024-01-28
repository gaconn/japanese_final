import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadAllDataLesson } from '../../../service/api/lesson'
import { useParams } from 'react-router-dom'
import { loadLessonData, setIsLoading, setNewWord } from '../../../service/reducer/SettingLessonReducer'
import {TypeWord} from '../../../common/constant/Const'

const SettingLesson = () => {
    const {lessonData, isLoading, isReload, newWord} = useSelector(state => state.settingLesson)
    const dispatch = useDispatch()
    const {lessonId} = useParams()
    useEffect(() => {
        (async() => {
            dispatch(setIsLoading(true))
            const dataRes = await loadAllDataLesson(lessonId)
            if (dataRes.data.data && dataRes.data.data.vocabulary && dataRes.data.data.grammar) {
                dispatch(loadLessonData(dataRes.data.data))
            }
            dispatch(setIsLoading(false))
        })()
    }, [])

    const inputVocabularyHandler = (e) => {
        dispatch(setNewWord({...newWord, [e.target.name]: e.target.value}))
    }
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
                <li className='flex border rounded-md py-1 px-3 flex-wrap' key="add-vocabulary">
                    <div className='mr-4 flex flex-col '>
                        <label>Loại từ</label>
                        <select className='border px-2 py-1 w-32' name='TypeWord' value={newWord.TypeWord} onChange={inputVocabularyHandler}>
                            <option value={TypeWord.HIRAGANA}>Hiragana</option>
                            <option value={TypeWord.KATAKANA}>Katakana</option>
                            <option value={TypeWord.KANJI}>Kanji</option>
                        </select>
                    </div>
                    <div className='mr-4 flex flex-col '>
                        <label>Từ tiếng Nhật</label>
                        <input type='text' className='border px-2 py-1 w-52' name="WordJapanese" value={newWord.WordJapanese} onChange={inputVocabularyHandler}/>
                    </div>
                    <div className='mr-4 flex flex-col '>
                        <label>Phiên âm</label>
                        <input type='text' className='border px-2 py-1 w-44' name='Spelling' value={newWord.Spelling} onChange={inputVocabularyHandler}/>
                    </div>
                    <div className='mr-4 flex flex-col '>
                        <label>Nghĩa tiếng Việt</label>
                        <input type='text' className='border px-2 py-1 w-60' name='Vietnamese' value={newWord.Vietnamese} onChange={inputVocabularyHandler}/>
                    </div>
                    {/* <div className='mr-4 flex flex-col mt-5 w-full'>
                        <label>Ví dụ</label>
                        <input type='text' className='border px-2 py-1 w-full'/>
                        <button className='w-7' >
                            <img src='/images/icons/add-button.png' alt='add-button' className='hover:shadow'/>
                        </button>
                    </div> */}
                    <button className='mr-4 border px-2 py-1 w-20 bg-yellow-200 hover:bg-yellow-600 font-bold mt-5' onClick={() => dispatch(setNewWord({}))}>Clear</button>
                    <button className='border px-2 py-1 bg-green-500 hover:bg-green-600 font-bold mt-5'>Thêm mới</button>
                </li>
                <button className='w-10' >
                    <img src='/images/icons/add-button.png' alt='add-button' className='hover:shadow'/>
                </button>
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