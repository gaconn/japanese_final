import React from 'react'

const TopScreenNotification = ({message, bgColorClass = "bg-green-600", textColorClass = "text-gray-600"}) => {
  return (
    <div className={`fixed top-0 ${bgColorClass} w-full z-20 left-0 right-0 text-center ${textColorClass}`}>{message}</div>
  )
}

export default TopScreenNotification