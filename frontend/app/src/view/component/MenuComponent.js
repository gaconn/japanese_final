import React from 'react'

const MenuComponent = () => {
  return (
    <div className='h-screen flex flex-col'>
        <label for="menu_checkbox" className='menu_trigger block w-fit h-fit m-2 cursor-pointer hover:shadow-lg hover: shadow-blue-500'>
            <img src='/images/icons/menu.png' alt='menu-icon' className='block w-10 h-10 shadow-inner shadow-blue-500'/>
        </label>
        <input type='checkbox' id='menu_checkbox' hidden/>
        <div className='menu_container flex-grow bg-yellow-100'>
            <div className='menu_list  w-32'>
                <div className='menu_item flex justify-around mb-3'>
                    <div><img src='/images/icons/home.png' className='block w-7 box-border m-2'/></div>
                    <div className='font-bold flex-grow self-center'>Trang chủ</div>
                </div>
                <div className='menu_item flex mb-3 justify-center'>
                    <div><img src='/images/icons/lesson.png' className='block w-7 box-border m-2'/></div>
                    <div className='font-bold flex-grow self-center'>Lesson</div>
                </div>
                <div className='menu_item flex justify-around mb-3'>
                    <div><img src='/images/icons/hiragana_alphabet.png' className='block w-7 box-border m-2'/></div>
                    <div className='font-bold flex-grow self-center'>Hiragana</div>
                </div>
                <div className='menu_item flex justify-around mb-3'>
                    <div><img src='/images/icons/katakana_alphabet.png' className='block w-7 box-border m-2'/></div>
                    <div className='font-bold flex-grow self-center'>Katakana</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuComponent