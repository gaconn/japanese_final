import React from 'react'
import { useParams } from 'react-router-dom'

const Exercise = () => {
    const {lessonId} = useParams()
  return (
    <div>Exercise Lesson {lessonId}</div>
  )
}

export default Exercise