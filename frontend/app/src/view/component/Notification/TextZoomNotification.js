import React from 'react'

const TextZoomNotification = ({text, color}) => {
  return (
    <div className={`fixed top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center`}>
        <div className={`font-bold text-9xl p-10 opacity-100 transition animate-textSuccessScale ${color}`}>{text}</div>
    </div>
  )
}

export default TextZoomNotification