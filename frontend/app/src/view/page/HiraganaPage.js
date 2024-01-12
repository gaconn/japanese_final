import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HiraganaPage = () => {
  return (
    <div className="flex flex-grow sticky top-0 right-0 bottom-0">
        <div className='w-4 bg-gray-500'></div>
        <div className="flex-1 bg-gray-100 rounded-md h-screen overflow-auto relative">
            <Outlet />
        </div>
        <div className="w-72 bg-gray-500 shadow-md p-4 overflow-auto h-screen sticky top-0 right-0 bottom-0">
            <h1 className="text-2xl font-bold mb-4">Danh sách bài học</h1>
            <div className="mb-4 bg-white rounded-md shadow-md p-4 text-center">
                <Link
                to={`/hiragana/theory`}
                className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md mr-2"
                >
                Lý thuyết
                </Link>
                <Link
                to={`/hiragana/exercise`}
                className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md"
                >
                Luyện tập
                </Link>
            </div>
        </div>
    
    </div>
  )
}

export default HiraganaPage