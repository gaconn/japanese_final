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
            if (dataRes.data.data && dataRes.data.data.vocabulary && dataRes.data.data.grammar) {
                dispatch(loadLessonData(dataRes.data.data))
            }
            dispatch(setIsLoading(false))
        })()
    }, [])
  return (
    <div>
        <div className="w-full bg-white rounded-md shadow-md p-6">
            <h1 className="text-2xl font-bold mb-4">Từ vựng và cấu trúc ngữ pháp tiếng Nhật</h1>

            <div>
                <h2 className="text-lg font-semibold mb-2">Từ vựng:</h2>
                <ul>
                <li className="flex items-start mb-2">
                    <div className="mr-2">
                    <span className="text-gray-700 japanese_word">こんにちは</span>
                    <span className="text-sm text-gray-500">（こんにちは）</span>
                    </div>
                    <div>
                    <span className="text-gray-500">Xin chào</span>
                    <p className="text-sm text-gray-500 mt-1">Ví dụ: こんにちは、元気ですか？（Xin chào, bạn khỏe không?)</p>
                    <p className="text-sm text-gray-500 mt-1">Ví dụ: こんにちは、元気ですか？（Xin chào, bạn khỏe không?)</p>
                    </div>
                </li>
                <li className="flex items-start mb-2">
                    <div className="mr-2">
                    <span className="text-gray-700 kanji">ありがとう</span>
                    <span className="text-sm text-gray-500">（ありがとう）</span>
                    </div>
                    <div>
                    <span className="text-gray-500">Cảm ơn</span>
                    <p className="text-sm text-gray-500 mt-1">Ví dụ: ありがとう、お世話になりました。（Cảm ơn, đã giúp đỡ tôi.)</p>
                    </div>
                </li>
                </ul>
            </div>

            <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">Cấu trúc ngữ pháp:</h2>
                <ul>
                <li className="flex items-start mb-2">
                    <div className="mr-2">
                    <span className="text-gray-700 kanji">～てください</span>
                    <span className="text-sm text-gray-500">（～てください）</span>
                    </div>
                    <div>
                    <span className="text-gray-500">Làm ơn</span>
                    <p className="text-sm text-gray-500 mt-1">Ví dụ: コーヒーを飲んでください。（Làm ơn uống cà phê.)</p>
                    </div>
                </li>
                <li className="flex items-start mb-2">
                    <div className="mr-2">
                    <span className="text-gray-700 kanji">～ませんか</span>
                    <span className="text-sm text-gray-500">（～ませんか）</span>
                    </div>
                    <div>
                    <span className="text-gray-500">Bạn có muốn... không?</span>
                    <p className="text-sm text-gray-500 mt-1">Ví dụ: 映画を見ませんか？（Bạn có muốn xem phim không?)</p>
                    </div>
                </li>
                </ul>
            </div>
            </div>
    </div>
  )
}

export default SettingLesson