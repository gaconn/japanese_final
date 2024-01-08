import React from 'react'
import MenuComponent from '../component/MenuComponent'
import {Outlet} from "react-router-dom"
const MainLayout = () => {
  return (
    <div className='flex'>
        <MenuComponent />
        <Outlet/>
    </div>
  )
}

export default MainLayout