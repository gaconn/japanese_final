import React from 'react'

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 w-full">
        <div className="bg-white shadow-lg rounded-lg p-6 w-96">
            <h2 className="text-2xl font-bold mb-4">Đăng nhập</h2>
            <form>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Nhập email"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Mật khẩu</label>
                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Nhập mật khẩu"/>
            </div>
            <div className="flex items-center justify-between mb-4">
                <label className="flex items-center">
                <input type="checkbox" className="form-checkbox"/>
                <span className="ml-2 text-sm text-gray-700">Ghi nhớ đăng nhập</span>
                </label>
                <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">Quên mật khẩu?</a>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Đăng nhập
                </button>
            </div>
            </form>
        </div>
        </div>
  )
}

export default LoginPage