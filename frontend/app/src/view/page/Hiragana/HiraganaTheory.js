import React, { useEffect } from 'react'
import { loadAlphabetData, LOAD_HIRAGANA } from '../../../service/process/loadData'
import { useSelector, useDispatch } from 'react-redux'
import { loadData, setTypeLoad } from '../../../service/reducer/HiraganaReducer'
import { Hiragana } from '../../../common/constant/Const'

const HiraganaTheory = () => {
    var {objHiragana, typeLoad} = useSelector(state => state.hiraganaAlphabet)
    const dispatch = useDispatch()
    useEffect( () => {
        const fetchData = async () => {
            try {
                var data = await loadAlphabetData(LOAD_HIRAGANA)
                console.log(data);
                var objFilter
                if(typeLoad === Hiragana.TYPE_LOAD_ALL) {
                    objFilter = {objHiragana: {...data[Hiragana.HIRAGANA_OBJ_KEY_COMMON]}}
                } else if (typeLoad === Hiragana.TYPE_LOAD_TENTEN) {
                    objFilter = {objTentenHiragana: {...data[Hiragana.HIRAGANA_OBJ_KEY_TENTEN]}}
                } else if (typeLoad === Hiragana.TYPE_LOAD_MARU) {
                    objFilter = {objMaryHiragana: {...data[Hiragana.HIRAGANA_OBJ_KEY_MARU]}}
                } else if (typeLoad === Hiragana.TYPE_LOAD_COMBINE) {
                    objFilter = {objHiraCombination: {...data[Hiragana.HIRAGANA_OBJ_KEY_COMBINE]}}
                }
                dispatch(loadData(objFilter))
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData()
    }, [dispatch, typeLoad])

    

  return (
    <div className="mt-2 mb-2 w-full min-h-screen flex justify-center items-center relative">
        <div className="flex flex-col w-24  h-7 fixed top-2 left-40">
            <button className="bg-transparent mb-4 hover:bg-gray-600 text-green-500 font-bold text-xs py-1 px-3 rounded-full border-2 border-gray-500 transition transform hover:translate-x-1" onClick={()=> dispatch(setTypeLoad(Hiragana.TYPE_LOAD_ALL))}>{"All"}</button>
            <button className="bg-transparent mb-4 hover:bg-gray-600 text-green-500 font-bold py-1 text-xs px-3 rounded-full border-2 border-gray-500 transition transform hover:translate-x-1" onClick={()=> dispatch(setTypeLoad(Hiragana.TYPE_LOAD_COMBINE))}>{"Combine word"}</button>
            <button className="bg-transparent mb-4 hover:bg-gray-600 text-green-500 font-bold py-1 text-xs px-3 rounded-full border-2 border-gray-500 transition transform hover:translate-x-1" onClick={()=> dispatch(setTypeLoad(Hiragana.TYPE_LOAD_TENTEN))}>{"Tenten"}</button>
            <button className="bg-transparent mb-4 hover:bg-gray-600 text-green-500 font-bold py-1 text-xs px-3 rounded-full border-2 border-gray-500 transition transform hover:translate-x-1" onClick={()=> dispatch(setTypeLoad(Hiragana.TYPE_LOAD_MARU))}>{"Maru"}</button>
        </div>
        <div className="grid grid-cols-5 gap-2">
            {
                Object.keys(objHiragana).map(typeWordHira => {
                    if(typeLoad === Hiragana.TYPE_LOAD_ALL && typeWordHira !== Hiragana.HIRAGANA_OBJ_KEY_TENTEN && typeWordHira !== Hiragana.HIRAGANA_OBJ_KEY_MARU) {
                        return Object.keys(objHiragana[typeWordHira]).map(keyOfWord => {
                            return <div key={keyOfWord} className="p-4 bg-white text-gray-700 text-center w-20 h-20 rounded-md transition translate hover:-translate-y-1 cursor-pointer hover:shadow-md hover:shadow-gray-600">    
                                {
                                    objHiragana[typeWordHira][keyOfWord] != null &&
                                    <>
                                        <div className='text-lg font-bold text-gray-800'>{objHiragana[typeWordHira][keyOfWord]}</div>
                                        <div className='text-sm font-semibold text-gray-400'>{keyOfWord}</div>
                                    </>
                                }
                            </div>
                        })
                    } else if(typeLoad !== Hiragana.TYPE_LOAD_ALL) {
                        return Object.keys(objHiragana[typeWordHira]).map(keyOfWord => {
                            return <div key={keyOfWord} className="p-4 bg-white text-gray-700 text-center w-20 h-20 rounded-md transition translate hover:-translate-y-1 cursor-pointer hover:shadow-md hover:shadow-gray-600">    
                                {
                                    objHiragana[typeWordHira][keyOfWord] != null &&
                                    <>
                                        <div className='text-lg font-bold text-gray-800'>{objHiragana[typeWordHira][keyOfWord]}</div>
                                        <div className='text-sm font-semibold text-gray-400'>{keyOfWord}</div>
                                    </>
                                }
                            </div>
                        })
                    }
                })
            }
        </div>
    </div>
  )
}

export default HiraganaTheory