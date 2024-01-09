import React from 'react'

const LessonPage = () => {
  return (
    <div className="h-screen flex-grow relative">
        <h3 className="font-bold text-white bg-green-500 h-14 text-lg flex items-center justify-center">Bài học</h3>
        <div className="w-full flex justify-center">
            <div className='w-1/2 border'>
                <div className='w-full mt-3 flex flex-wrap justify-evenly border-b-2'>
                    <div className='font-bold text-lg w-full text-center'>Bài 1</div>
                    <div className='flex-grow m-2 text-center rounded-md bg-blue-600 pt-1 pb-1 pl-4 pr-4 font-bold text-gray-200 cursor-pointer hover:bg-blue-800'>Lý thuyết</div>
                    <div className='flex-grow m-2 text-center rounded-md bg-green-600 pt-1 pb-1 pl-4 pr-4 font-bold text-gray-200 cursor-pointer hover:bg-green-800'>Luyện tập</div>
                </div>
                <div className='w-full mt-3 flex flex-wrap justify-evenly border-b-2'>
                    <div className='font-bold text-lg w-full text-center'>Bài 1</div>
                    <div className='flex-grow m-2 text-center rounded-md bg-blue-600 pt-1 pb-1 pl-4 pr-4 font-bold text-gray-200 cursor-pointer hover:bg-blue-800'>Lý thuyết</div>
                    <div className='flex-grow m-2 text-center rounded-md bg-green-600 pt-1 pb-1 pl-4 pr-4 font-bold text-gray-200 cursor-pointer hover:bg-green-800'>Luyện tập</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LessonPage