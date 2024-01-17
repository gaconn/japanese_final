import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadQuestionHiraganaData } from '../../../service/process/loadData'

const HiraganaExercise = () => {
  const {question, answer, listFakeAnswer, typeQuestion, reload} = useSelector(state => state.exercise)
  const dispatch = useDispatch()

  useEffect(() => {
    const loadQuestion = async() => {
      if(reload) {
        const dataFilter = await loadQuestionHiraganaData(typeQuestion)
        const data = {...dataFilter}
        dispatch(loadQuestion({
          question: data.question,
          answer: data.answer,
          listFakeAnswer: data.listFakeAnswer
        }))
      }
    }
    loadQuestion()
  }, [dispatch])
  console.log(question);
  return (
    <div className='h-screen relative'>
      <div className="flex flex-col w-24  h-7 absolute top-2 left-4">
        <button className="bg-transparent mb-4 hover:bg-gray-200 text-red-500 font-bold text-xs py-1 px-3 rounded-full border-2 border-gray-500 transition transform hover:translate-x-1">{"Vie -> JPN"}</button>
        <button className="bg-transparent mb-4 hover:bg-gray-200 text-green-500 font-bold py-1 text-xs px-3 rounded-full border-2 border-gray-500 transition transform hover:translate-x-1">{"JPN -> Vie"}</button>
        <button className="bg-transparent mb-4 hover:bg-gray-200 text-blue-500 font-bold py-1 text-xs px-3 rounded-full border-2 border-gray-500 transition transform hover:translate-x-1">{"Random"}</button>
      </div>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="px-4 py-2 w-full">
          <p className="text-lg font-bold text-center">{question}</p>
          <ul className="mt-10 flex justify-center">
            {
              Object.keys(listFakeAnswer).map((item, key) => {
                return (
                  <li className='mx-3' key={key}>
                    <label className="flex items-center">
                      <button className='rounded-md bg-transparent border-gray-700 border-2 px-4 py-1 hover:bg-green-200 transition transform hover:-translate-y-1'>{listFakeAnswer[item]}</button>
                    </label>
                  </li>
                )
              })
            }
          </ul>
        </div>
        
      </div>
      <div className="flex flex-col justify-between items-center px-4 py-2 absolute top-0 right-0">
        <div className="bg-gray-100 px-4 py-2 rounded border-2 mb-5">
          <span className="font-bold">Điểm số:</span>
          <span className="ml-2">0/5</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24 mb-4 hover:shadow-md hover:shadow-blue-700">
          Gợi ý
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded w-24 hover:shadow-md hover:shadow-red-600">
          Bỏ qua
        </button>
        
      </div>
    </div>
  )
}

export default HiraganaExercise