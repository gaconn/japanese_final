import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCommittedResult, setIsLoading, setIsToast, setValues } from '../../../service/reducer/AddLessonReducer'
import { createLesson } from '../../../service/api/lesson'
import TopScreenNotification from '../../component/Notification/TopScreenNotification'

const AddLesson = () => {
    const {isLoading, isSuccess, values, isToast} = useSelector(state=> state.addLesson)
    const dispatch = useDispatch()

    const inputHandler = (e) => {
        if (e.target.name === 'LessonNameVN' || e.target.name === 'LessonNameJP' || e.target.name === 'CreatedDate') {
            dispatch(setValues({...values, [e.target.name]: e.target.value}))
        }
    }

    useEffect(()=> {
        const executeCreateLesson = async() => {
            if (isLoading) {
                const result = await createLesson(values)
                dispatch(setCommittedResult(result.data))
                setTimeout(() => {
                    dispatch(setIsToast(false))
                    dispatch(setIsLoading(false))
                }, 2000)
            }
        }
        executeCreateLesson()
    }, [isLoading]) 
    return (
        <div className='flex flex-col items-center content-center justify-center h-screen'>
            {
                isToast && (isSuccess ? 
                <TopScreenNotification message={"Thêm thành công"} bgColorClass={"bg-green-600"} textColorClass={"text-gray-600"}/>
                :
                <TopScreenNotification message={"Thêm thất bại"} bgColorClass={"bg-red-600"} textColorClass={"text-gray-800"} />)
            }
            <h1 className='text-3xl font-bold text-gray-700'>Thêm bài học mới</h1>
            <div className='pt-12 pb-5 '>
                <span className='font-medium mr-8 w-50 block'>{"Tên bài học (Tiếng việt)"}</span>
                <input type='text' name='LessonNameVN' onChange={inputHandler} value={values.LessonNameVN || ''} className='p-1 border rounded-md border-gray-400 hover:border-green-200 focus:border-blue-400 w-60'/>
            </div>
            <div >
                <span className='font-medium mr-8 w-50 block'>{"Tên bài học (Tiếng Nhật)"}</span>
                <input type='text' name='LessonNameJP' onChange={inputHandler} value={values.LessonNameJP || ''} className='p-1 border rounded-md border-gray-400 hover:border-green-200 focus:border-blue-400 w-60'/>
            </div>

            <div className='mt-6'>
                <span className='font-medium mr-8 w-50 block'>{"Ngày học"}</span>
                <input type='date' name='CreatedDate' onChange={inputHandler} value={values.CreatedDate || ''} className='p-1 border rounded-md border-gray-400 hover:border-green-200 focus:border-blue-400 w-60'/>
            </div>

            <div className='mt-6'>
                {isLoading ? 
                <button type="button" className="bg-blue-500 w-40 h-12 py-2 px-9 rounded-md font-bold text-white cursor-pointer align-middle" disabled>
                    <span className=" inline-block rounded-full animate-spin h-8 w-8  border-2 border-t-indigo-500">
                    </span>
                </button> :
                <button className='bg-blue-500 py-2 px-9 w-40 h-12 rounded-md font-bold text-white hover:bg-blue-600' onClick={()=>dispatch(setIsLoading(true))}>Tạo mới</button>}
            </div>
            
        </div>
    )
}

export default AddLesson