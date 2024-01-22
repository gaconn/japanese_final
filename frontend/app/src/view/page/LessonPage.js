import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { loadLessons } from '../../service/api/lesson'
import { loadLessonReducer, setIsLoading } from '../../service/reducer/LoadLessonReducer'

const LessonPage = () => {
    const {lessons, isReload, isLoading} = useSelector(state => state.loadLesson)
    const dispatch = useDispatch()

    useEffect(() => {
        const execute = async () => {
            dispatch(setIsLoading(true))
            const result = await loadLessons()
            // TODO: handle error
            //

            dispatch(loadLessonReducer(result.data))
            dispatch(setIsLoading(false))
            if (isReload) {
            }
        }
        execute()
    }, [dispatch, isReload])
    return (
        <div className="flex flex-grow sticky top-0 right-0 bottom-0">
            <div className='w-4 bg-gray-500'></div>
            <div className="flex-1 bg-gray-100 rounded-md h-screen overflow-auto relative">
                <Outlet />
            </div>
            <div className="w-72 bg-gray-500 shadow-md p-4 overflow-auto h-screen sticky top-0 right-0 bottom-0 flex flex-col">
                <div>
                    <h1 className="text-2xl font-bold mb-4">Danh sách bài học</h1>
                    {lessons && lessons.map((lesson) => (
                    <div key={lesson.id} className="mb-4 bg-white rounded-md shadow-md p-4 text-center relative">
                        <h2 className="text-lg font-semibold mb-2">{lesson.lesson_name_vn}</h2>
                        <Link
                        to={`/lesson/theory/${lesson.id}`}
                        className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md mr-2"
                        >
                        Lý thuyết
                        </Link>
                        <Link
                        to={`/lesson/exercise/${lesson.id}`}
                        className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md"
                        >
                        Luyện tập
                        </Link>
                        <Link to={`/lesson/setting/${lesson.id}`}>
                            <img src='/images/icons/setting.png' alt='setting' className='w-6 absolute top-1 right-1'/>
                        </Link>
                    </div>
                    ))}
                </div>
                <div className='text-center w-full'>
                    <Link to={"/lesson/add"} className='bg-green-400 text-2xl font-bold py-2 px-2 text-gray-700 text-center hover:text-white m-auto hover:bg-green-500 border w-full block'>Thêm bài học mới</Link>
                </div>
            </div>
        
        </div>
    )
}

export default LessonPage